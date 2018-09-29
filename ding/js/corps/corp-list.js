var _list_data;


$(function () {

    



    _default_hash = "page_list";

    window.onhashchange = route;
    _pages = {
        page_list: new page_list(),
        page_info: new page_info()

    };

    _pages.page_list.请求数据();
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

    this.请求数据 = function () {

        return do_请求数据();

    }

    function do_请求数据() {



        $.ajax({
            type: "POST",
            url: "service/CorpsService.aspx?api=all",
            dataType: 'json',

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



    function 显示结果(data) {

        var $list = $("#news-list");
        //data.forEach(function (news) {
        for (var i = 0; i < data.length; i++) {

            var news = data[i];

            //var aid = 'corp-info-' + news.object_id;

            var innHtml = '<li>'
                + '<a href="#page_info?i=' + i + '">'
                + '<div class="news-list-item">'
                + '<div class="news-thumb"><img src="http://www.youthcreatorvalley.com/wx/UploadFiles/' + news.现存文件1 + '"/></div>'
                + '<div class="news-info">'
                + '<div class="news-info-title">' + news.客户名称 + '</div>'
                + '<div class="news-info-date">'
                + news.企业简介
                + '</div></div></div></a></li>';

            $list.append(innHtml);

            //$('#' + aid).bind("click", function () { 显示企业信息(news) });
            
        }


    }





    function 相当于私有方法() {

    }


}