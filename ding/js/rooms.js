var _vw = 1;
var _vh = 1;



$(function () {

    //计算缩放率();

    按状态查询();



});


function 着色(状态_list) {

    function 取状态(结构号) {
       
        for (var j = 0; j < 状态_list.Count; j++) {

            if (状态_list.DataTable[j].结构号.toUpperCase() == 结构号.toUpperCase()) {

                return 状态_list.DataTable[j].状态;

            }

        }

        //未知状态 x
        return "x";

    }

    //处理单独room
    var $rooms = $('.room').not(".room-group .room");
    
    $rooms.each(function (i) {

        状态 = 取状态($(this).attr("id"));

        $(this).addClass('s' + 状态);
        //比例缩放($(this));

        $(this).text($(this).attr('id'));

    });

    //处理room-group
    var $group = $('.room-group');
    $group.each(function (i) {

        var $sub_rooms = $(this).children('.room');

        状态 = 取状态($(this).attr("id"));

        $sub_rooms.each(function (i) {


            $(this).addClass('s' + 状态);
            //比例缩放($(this));

            $(this).text($(this).attr('id'));

        });



    });

}


function status_onchange() {

    按状态查询();

}


function 显示结果(data) {
    console.log(data);

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

        },
        error: function (data) {
            console.log(data);
            return alert(data.responseText);
        }
    });



}



function 计算缩放率() {
    var w = $('.map').width();
    var h = $('.map').height();
    var map_w = 1080;
    var map_h = 765;
    _vw = w / map_w;
    _vh = h / map_h;

}

function 比例缩放($obj) {

    $obj.css('top', Math.round($obj.position().top * _vh) + 'px');
    $obj.css('left', Math.round($obj.position().left * _vw) + 'px');
    $obj.css('width', Math.round($obj.width() * _vw) + 'px');
    $obj.css('height', Math.round($obj.height() * _vh) + 'px');

}