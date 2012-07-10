$(document).ready(function(){
    $("#but_dayx").click(function(){
        $('#but_dayx').detach();
        $('#im1').attr("src","img/gif_1.gif").css("display","inline");
    });

    $("#im1").click(function(){
        window.location.reload();
    });
});