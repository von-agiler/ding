var _list_data;
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



    _default_hash = "page_list";

    window.onhashchange = route;
    _pages = {
        page_list: new page_list(),
        page_info: new page_info()

    };

    _pages.page_list.请求_top_n();
    _pages.page_list.查询();
    _pages.page_list.show();
    _page_current = _pages.page_list;

    route();

});




function page_list() {
    var me = this;
    var page_div = $("#page_list");

    this.show = function () {
        me.init();
        page_div.show();

    };
    this.hide = function () {
        page_div.hide();
    };
    this.init = function () {


    };
    this.close = function () {
        me.hide();
    };

    this.请求_top_n = function () {

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
    this.查询 = function () {
        
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

    function do_请求数据() {
 

        


    }

    function 显示_top_n(data) {

        for (var i = 0; i < data.length; i++) {

            var news = data[i];

            _swiper_list.appendSlide(
                '<div class="swiper-slide">'
                + '<div class="corp-photo"><img src="http://www.youthcreatorvalley.com/wx/UploadFiles/' + news['现存文件1'] + '"/></div>'
                + '<div class="swiper-text">' + html_encode(news.客户名称) + '</div>'
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
                '<li><a href="#page_info?i=' + i + '">'
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




}