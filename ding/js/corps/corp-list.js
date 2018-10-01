var _swiper_list

$(function () {

    _swiper_list = new Swiper('#swiper-container-list', {
        //direction: 'horizontal',
        init: false,
        speed: 200,
        delay: 1000,
        //freeMode : true,
        //freeModeSticky : true,

        autoplay: true,
        loop: true,
        effect: 'coverflow',//cube,fade,slide,coverflow,flip
        //分页器
        pagination: {
            el: '.swiper-pagination',
            //bulletActiveClass: 'my-bullet-active',
            //currentClass : 'my-pagination-current',

        },
        //scrollbar: {el: '.swiper-scrollbar',},
        initialSlide: 0,


    });


    请求_top_n();
    查询();



});




function 请求_top_n() {

    $.ajax({
        type: "POST",
        url: "service/CorpsService.aspx?api=top-n",
        dataType: 'json',
        data: { n: 6 },

        success: function (data) {

            显示_top_n(data.DataTable);

        },
        error: function (data) {
            console.log(data);
            return alert(data.responseText);
        }
    });

}
function 查询() {

    var key = $('#search-key').val();

    $.ajax({
        type: "POST",
        url: "service/CorpsService.aspx?api=query",
        dataType: 'json',
        data: { key: key },

        success: function (data) {

            console.log(data);

            _list_data = data.DataTable;

            显示结果(data.DataTable);

        },
        error: function (data) {
            console.log(data);
            return alert(data.responseText);
        }
    });

}



function 显示_top_n(data) {

    for (var i = 0; i < data.length; i++) {

        var news = data[i];

        _swiper_list.appendSlide(
            '<div class="swiper-slide">'
            + '<a href="corp-info.html?id=' + html_encode(news.object_id)+'">'
            + '<div class="corp-photo"><img src="http://www.youthcreatorvalley.com/wx/UploadFiles/' + news['现存文件1'] + '"/></div>'
            + '<div class="swiper-text">' + html_encode(news.客户名称) + '</div>'
            + '</a>'
            + '</div>'
        );

    }

    _swiper_list.init();

}


function 显示结果(data) {

    var $list = $("#news-list");

    $list.empty();

    for (var i = 0; i < data.length; i++) {

        var news = data[i];

        //var aid = 'corp-info-' + news.object_id;

        var innHtml =
            '<li><a href="corp-info.html?id=' + news.object_id + '">'
            + '<div class="news-list-item">'
            + '<div class="news-thumb"><img src="http://www.youthcreatorvalley.com/wx/UploadFiles/' + news.现存文件1 + '"/></div>'
            + '<div class="news-info">'
            + '<div class="news-info-title">' + html_encode(news.客户名称) + '</div>'
            + '<div class="news-info-date">'
            + html_encode(news.企业简介)
            + '</div></div></div></a></li>';

        $list.append(innHtml);
        
        //$('#' + aid).bind("click", function () { 显示企业信息(news) });

    }

}




