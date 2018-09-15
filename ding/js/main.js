var _vw;
var _vh;




$(function () {

    var w = $('.map').width();
    var h = $('.map').height();
    var map_w = 1080;
    var map_h = 765;

    _vw = w / map_w;
    _vh = h / map_h;


    着色();

});




function 着色() {

    //处理单独room
    var $rooms = $('.room').not(".room-group .room");
    var r;
    $rooms.each(function (i) {

        r = Math.floor(Math.random() * 3 + 1);

        $(this).addClass('s' + r);
        比例缩放($(this));
             

    });

    //处理room-group
    var $group = $('.room-group');
    $group.each(function (i) {

        var $sub_rooms = $(this).children('.room');

        r = Math.floor(Math.random() * 3 + 1);

        $sub_rooms.each(function (i) {
            $(this).addClass('s' + r);
            比例缩放($(this));

        });



    });




}


function 比例缩放($obj) {


    $obj.css('top', Math.round($obj.position().top * _vh) + 'px');
    $obj.css('left', Math.round($obj.position().left * _vw) + 'px');
    $obj.css('width', Math.round($obj.width() * _vw) + 'px');
    $obj.css('height', Math.round($obj.height() * _vh) + 'px');

}

