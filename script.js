$(document).ready(function() {
    $('#run').click(function() {
        var htmlCode = $('#htmlCode').val();
        var cssCode = '<style>' + $('#cssCode').val() + '</style>';
        var jsCode = '<script>' + $('#jsCode').val() + '<\/script>';
        var output = $('#output').contents().find('html');
        output.html(htmlCode + cssCode + jsCode);
    });
});
