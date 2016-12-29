$(document).ready(function(){
    $("#menu").html("<center>" +
    "<table>" +
    "<tr>" +
        "<td align='center' style='width:100px'><a href='https://bowling-ricksukiennik.c9users.io/index.html'>Home</a></td>" +
        "<td align='center' style='width:100px'><a href='https://bowling-ricksukiennik.c9users.io/12summer.html'>2012 Season</a></td>" +
        "<td align='center' style='width:100px'><a href='https://bowling-ricksukiennik.c9users.io/13summer.html'>2013 Season</a></td>" +
        "<td align='center' style='width:100px'><a href='https://bowling-ricksukiennik.c9users.io/16winter.html'>2016 Season</a></td>" +
        "<td align='center' style='width:100px'><a href='https://bowling-ricksukiennik.c9users.io/17spring.html'>2017 Season</a></td>" +
        "<td align='center' style='width:100px'><a href='https://bowling-ricksukiennik.c9users.io/arsenal.html'>Arsenal</a></td>" +
        "<td align='center' style='width:100px'><a href='https://bowling-ricksukiennik.c9users.io/practice.html'>Practice</a></td>" +
    "</tr>" +
    "</table>" +
        "<canvas id='bar' align='center' width='1150px' height='5px' style='padding:0px; margin:0xp; background-color:#f44242'></canvas>" +
    "</center>");
})

$(".header").click(function () {
    $header = $(this);
    $content = $header.next();
    $content.slideToggle(500, function () {
        $header.text(function () {
            return $content.is(":hidden") ? "Read" : "Collapse";
        });
    });

});