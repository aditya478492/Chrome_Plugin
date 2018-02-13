/**
 * Created by Aditya on 2017-08-13.
 */
var height='30px';
var clr=$('#clrbx input').val('black');
var url=chrome.extension.getURL('popup.html');
var iframe="<iframe id='myowniframe_Ad' src='"+url+"' style='height:"+height+"'></iframe>";
$('html').append(iframe);

        $('body').css({
            'background-image':'url("https://img.gifmagazine.net/gifmagazine/d1e4f0eaf72242478bcd4f7dbc72109b.gif")',
            'font-family':'corsiva'
        });
        $('body *').css({
            'background-image':'url("https://img.gifmagazine.net/gifmagazine/d1e4f0eaf72242478bcd4f7dbc72109b.gif")',
            'font-family':'corsiva'
        });

        $('head *').css({
            'background-image':'url("https://img.gifmagazine.net/gifmagazine/d1e4f0eaf72242478bcd4f7dbc72109b.gif")',
            'font-family':'bold'
        });
        $('.yt-lockup-content div *').css({
            'font-size':'110%'
        });



