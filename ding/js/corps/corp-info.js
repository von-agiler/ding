function page_info() {
    var me = this;
    var page_div = $("#page_info");

    this.show = function () {
        me.init();
        page_div.show();

        var mySwiper = new Swiper('#swiper-container', {
            //direction: 'horizontal',
            speed: 500,
            delay: 1000,
            //freeMode : true,
            //freeModeSticky : true,

            autoplay: true,
            loop: true,
            effect: 'coverflow',//cube,fade,slide,coverflow,flip
            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
                //bulletActiveClass: 'my-bullet-active',
                //currentClass : 'my-pagination-current',

            },
            //scrollbar: {el: '.swiper-scrollbar',},

        });


    };
    this.hide = function () {
        page_div.hide();
    };
    this.init = function () {

        //清除信息
        $("#text-info div").text('');

        显示信息();



    };
    this.close = function () {
        me.hide();
    };


    function 显示信息() {

        var i = parseInt(getHashParam("i"));

        var news = _list_data[i];
        console.log(news);


        $('#swiper-wrapper').empty();


        
        $('#title-客户名称').text(newline(html_encode(news.客户名称)));

        for (var j = 1; j <= 3; j++) {

            //if (news['现存文件' + j] && news['现存文件' + j] != '') {

                $('#swiper-wrapper').append(
                    '<div class="swiper-slide"><div class="corp-photo">'
                    + '<img src="http://www.youthcreatorvalley.com/wx/UploadFiles/' + news['现存文件' + j] + '"/>'
                    + '</div>'

                );

           // }


        }



        //写信息
        for (p in news) {

            $('#' + p).text(newline(html_encode(news[p])));

        }

    }




}