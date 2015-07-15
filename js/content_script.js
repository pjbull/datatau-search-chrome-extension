$(function() {
    var html = '<form method="get" action="http://www.google.com/search" style="display:inline-block; padding-left: 10px; height:10px;"> <span style="width:15em;""> <input type="text" name="q" size="25" maxlength="255" value="" /> <input type="submit" value="Search" /><input style="display:none;" type="checkbox" name="sitesearch" value="datatau.com" checked /></span> </form>'
    $(".pagetop").first().append(html);
});
