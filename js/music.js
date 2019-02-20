$(function(){
    arrMusicID = [2313655655,2294163023,2312464507];  //musicID array
    musicID = Math.floor(Math.random()*(arrMusicID.length)) //get a ran num as index
    $('body').css('height',document.documentElement.clientHeight -5);

    if (!Number.isInteger(arrMusicID[musicID])) return; // load failed, bye~

    var iframe = document.createElement('iframe');
    iframe.id="bgm";
    iframe.style = "position: absolute; bottom: 0; left: 30px; border: 0px;";
    iframe.src = '//music.163.com/outchain/player?type=0&id=' +arrMusicID[musicID]+ '&auto=1&height=32';
    console.log(iframe.src)
    iframe.frameborder="no";
    iframe.marginwidth="0";
    iframe.marginheight="0";
    iframe.width=0;
    iframe.height=0;
    document.body.appendChild(iframe);
});
