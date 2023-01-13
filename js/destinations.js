$(".burger").click(function(){
    $(".slide").animate({left: "0px"}, 500);
});
$(".close").click(function(){
    $(".slide").animate({left: "-150px"})
})
$('a img').hover(
    function(){ $(this).animate({ opacity : '.75' }); }
    ,
    function(){ $(this).animate({ opacity : '1' }); }
    
   );