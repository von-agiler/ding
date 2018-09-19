//缩放率
var _vw = 1;
var _vh = 1;
//实际尺寸,实际坐标尺寸
var _real_w = 1080;
var _real_h = 765;
var _已缩放 = false;

$(function () {

});

//window.onload 等页面中的图片、声音、图像,css等远程资源被加载完毕后才调用而 
//jQuery中只需要页面结构被加载完毕。
window.onload = function () {

    计算缩放率();

    按状态查询();
}


function 着色(状态_list) {

    function box处理($box, 状态) {


        if (状态) {
            $box.addClass('s' + 状态.状态);

            if (状态.门牌号) {
                $box.bind("click", function () {

                    //alert(状态.门牌号);

                    //window.location = 'rooms/detail/' + 状态.门牌号+'.jpg';

                    toast(状态.门牌号);
                });

                $box.html(状态.门牌号);//$box.attr('id') + '<br/>' + 
            }

        }


        比例缩放($box);



    }

    function 取状态(结构号) {

        for (var j = 0; j < 状态_list.Count; j++) {

            if (状态_list.DataTable[j].结构号.toUpperCase() == 结构号.toUpperCase()) {

                return 状态_list.DataTable[j];

            }

        }


    }

    //处理单独room
    var $rooms = $('.room').not(".room-group .room");

    $rooms.each(function (i) {

        var 状态1 = 取状态($(this).attr("id"));
        box处理($(this), 状态1);

    });

    //处理room-group
    var $group = $('.room-group');
    $group.each(function (i) {

        var $sub_rooms = $(this).children('.room');

        var 状态2 = 取状态($(this).attr("id"));

        $sub_rooms.each(function (i) {

            box处理($(this), 状态2);

        });


    });

}


function status_onchange() {

    按状态查询();

}


function 显示结果(data) {
    console.log(data);

    

    console.log(_vw + ',' + _vh);

    //显示层
    for (var i = 0; i < data.层_list.Count; i++) {

        var map_class = '.map-';
        var 楼号 = data.层_list.DataTable[i].层.substr(0, 1).toUpperCase();
        if (楼号 == 'A' || 楼号 == 'E') {

            map_class = map_class + 'A-E-' + data.层_list.DataTable[i].层.substr(2, 1);
        }
        else {

            map_class = map_class + data.层_list.DataTable[i].层;

        }

        $(map_class).removeClass('hide');
    }

    着色(data.状态_list);
}

function 按状态查询() {

    $('.map').not('.hide').addClass('hide');


    $.ajax({
        type: "POST",
        url: "service/RoomService.aspx?api=query",
        dataType: 'json',
        data: {
            状态: $("#select_status").val(),
        },

        success: function (data) {
                        

            显示结果(data);

            _已缩放 = true;

        },
        error: function (data) {
            console.log(data);
            return alert(data.responseText);
        }
    });



}



function 计算缩放率() {

    // 获取视口高度
    //var viewportH = $(window).height();
    //window.innerHeight || document.documentElement.clientHeight;

    var w = $('.map').width();
    var h = Math.round(w * (_real_h / _real_w));
    $('.map').css('height', h + 'px');


    _vw = w / _real_w;
    _vh = h / _real_h;

    //_real_w = w;
    //_real_h = h;

    

}

function 比例缩放($obj) {
    if (_已缩放 == false) {
        $obj.css('top', Math.round($obj.position().top * _vh) + 'px');
        $obj.css('left', Math.round($obj.position().left * _vw) + 'px');
        $obj.css('width', Math.round($obj.width() * _vw) + 'px');
        $obj.css('height', Math.round($obj.height() * _vh) + 'px');
        
    }
}