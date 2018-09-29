function html_encode(value) {
    return $('<div/>').text(value).html();
}

function html_decode(value) {
    return $('<div/>').html(value).text();
}

function newline(str) {
    return str.replace(/\n/g, "<br/>");
}