$(".navSelect").siblings("ol").each(function(){
    $(this).attr("data-h",$(this).height());
    $(this).height(0);
});
$(".navSelect").on("mouseenter",function(){
    $(this).siblings("ol").stop().animate({height:$(this).siblings("ol").attr("data-h")},300);
});
$(".navSelect").parent("li").on("mouseleave",function(){
    $(this).find("ol").stop().animate({height:0},300);
});

$("#videoShow").on("click",function(){
    $(".videoBox").show();
    $("#video")[0].play();
});
$(".boxBg").on("click",function(){
    $("#video")[0].pause();
    $(".videoBox").hide();
});

//计算奖项中间项的margin
for(var i = 0; i < $(".awards .awardItem").length; i++){
    console.log(2 * (parseInt(i / 3) + 1) + parseInt(i / 3))
    $(".awards .awardItem").eq(2 * (parseInt(i / 3) + 1) + parseInt(i / 3) - 1 ).css({
        "marginLeft": 22,
        "marginRight":22
    });
}
$(".awards").on("click",".awardItem .itemDetail",function(){
    $(".awardPopUp").show();
    var imgUrl = $(this).parents(".awardItem").attr("data-img");
    var title = $(this).parents(".awardItem").attr("data-title");
    var text = $(this).parents(".awardItem").attr("data-cont");
    $(".awardPopUp .popCont .popImg img").attr("src",imgUrl);
    $(".awardPopUp .popCont .popTitle").html(title);
    $(".awardPopUp .popCont .popText").html(text);
    $(".awardPopUp .popCont").css("marginTop", -$(".awardPopUp .popCont").outerHeight() / 2);
});
$(".awardPopUp .popBg,.awardPopUp .closePop").on("click",function(){
    $(".awardPopUp").hide();
});
//计算奖项弹窗的margin
$(".awardPopUp .popCont").css("marginTop", -$(".awardPopUp .popCont").outerHeight() / 2);

//公益的地图
$(".map").on("mouseenter","span",function(){
    var top = $(this).position().top;
    var left = $(this).position().left;
    var src = $(this).attr("data-src");
    $(".map .mapPopUp img").attr("src",src);
    $(".map .mapPopUp").css({
        "display":"block",
        "top" : top - 90,
        "left": left - 30
    });
});
$(".map").on("mouseleave","span",function(){
    $(".map .mapPopUp").css({
        "display":"none",
    });
});

//计算分院负责人中间项的margin
for(var i = 0; i < $(".principal .principalItem").length; i++){
    console.log(2 * (parseInt(i / 3) + 1) + parseInt(i / 3))
    $(".principal .principalItem").eq(2 * (parseInt(i / 3) + 1) + parseInt(i / 3) - 1 ).css({
        "marginLeft": 22,
        "marginRight":22
    });
}