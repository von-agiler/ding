function html_encode(value) {
    return $('<div/>').text(value).html();
}

function html_decode(value) {
    return $('<div/>').html(value).text();
}

function newline(str) {
    return str.replace(/\n/g, "<br/>");
}

//得到URL参数
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
    if (r != null) return unescape(r[2]);
    return null; //返回参数值
}