$(".burger").click(function(){
    $(".slide").animate({left: "0px"}, 800);
   
});
$(".close").click(function(){
    $(".slide").animate({left: "-160px"}, 400);
    
})