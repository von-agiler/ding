var _page_current = null;
var _pages = {};
var _default_hash;

function route() {

    var hash = getHash();

    if (!hash) {
        hash = _default_hash;

    }

    if (_page_current) {
        _page_current.hide();
    }

    //console.log(hash);

    if (_pages[hash]) {
        _pages[hash].show();
        _page_current = _pages[hash];

    }



}
function getHash(url) {
    var url = location.href;
    var hash;
    if (!!url) {
        hash = url.replace(/^.*?[#](.+?)(?:\?.+)?$/, "$1");
        hash = (hash == url) ? "" : hash;
    } else {
        hash = location.hash;
    }
    //hash = "" + hash;
    hash = hash.replace(/^[?#]/, '');
    return hash;
}
function getHashParam(name) {
    var index = location.hash.indexOf('?');

    if (index != -1) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = location.hash.substr(index + 1).match(reg);
        if (r != null) return unescape(r[2]);
    }
    return null;
}