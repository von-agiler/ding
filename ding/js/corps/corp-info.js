var _swiper_info

$(function () {

    _swiper_info = new Swiper('#swiper-container-info', {
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
        //updateOnImagesReady: true

    });

    请求数据();

});
//得到URL参数
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
    if (r != null) return unescape(r[2]);
    return null; //返回参数值
}

function 请求数据() {

    var id = getUrlParam('id');
    
    $.ajax({
        type: "POST",
        url: "service/CorpsService.aspx?api=byID",
        dataType: 'json',
        data: { id: id },

        success: function (data) {

            console.log(data);
            
            显示信息(data);

        },
        error: function (data) {
            console.log(data);
            return alert(data.responseText);
        }
    });


}



function 显示信息(data) {

    var news = data.QC_企业介绍.DataTable[0];
    var 全景地图 = data.全景地图;

    //清除信息
    $("#text-info div").text('');

    console.log(news);

    $('#title-客户名称').text(html_encode(news.客户名称));

    $('#swiper-wrapper-info').empty();
    //_swiper_info.removeAllSlides();

    for (var j = 1; j <= 3; j++) {

        if (news['现存文件' + j] && news['现存文件' + j] != '') {

            _swiper_info.appendSlide(
                '<div class="swiper-slide"><div class="corp-photo">'
                + '<img src="http://www.youthcreatorvalley.com/wx/UploadFiles/' + news['现存文件' + j] + '"/>'
                + '</div></div>'
            );

        }

    }

    _swiper_info.init();


    //写信息
    for (p in news) {

        $('#' + p).html(newline(html_encode(news[p])));

    }

    if (news["全景地图"]) {

        $('#全景地图').attr("href",news["全景地图"]).text("全景地图");
    }
    else {
        $('#全景地图').attr("href", "http://www.toocoolvr.com").text("还没有全景图,请联系图酷科技");
    }

}


