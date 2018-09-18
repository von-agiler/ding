
function toast(msg, duration, callback) {
    var content = msg || '这是提示信息';

    var dur = 1200;
    if (typeof duration === 'function') {
        callback = duration;
    }else if (duration) {
        dur = duration;
    }
    $("#xToastContent").text(content);
    $("#xToast").modal('show');

    setTimeout(closeToast.bind(null, callback), dur);
}

function closeToast(callback) {
    $("#xToast").modal('hide');
    if (callback) {
        setTimeout(callback, 500);
    }
}

function msgbox(msg) {

}