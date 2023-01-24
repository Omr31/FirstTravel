$(".burger").click(function(){
    $(".slide").animate({left: "0px"}, 500);
   
});
$(".close").click(function(){
    $(".slide").animate({left: "-150px"});
    
})