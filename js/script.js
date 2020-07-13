var colors = ["red","orange","yellow","green","blue","purple","brown","chocolate","darkgreen","deeppink","lightseagreen","navy","steelblue","lime","tomato","violet","chartreuse","darkred","gold","royalblue","firebrick"];
var borders = ["solid","dotted","dashed","double","inset","onset","groove"];

function setBackground(){
    let backgroundColor = Math.floor(Math.random() * colors.length);
    return backgroundColor;
}

function setBorder() {
    let borderSelect = Math.floor(Math.random() * borders.length);
    let borderColor = Math.floor(Math.random() * colors.length);

    let newBorder = borders[borderSelect] + " " + colors[borderColor];
    return newBorder;
}

$(".changeBtnOne").click(function() {
    $(".firstBox").css("background", colors[setBackground()]);
    $(".firstBox").css("border", setBorder());
});

$(".changeBtnTwo").click(function() {
    $(".secondBox").css("background", colors[setBackground()]);
    $(".secondBox").css("border", setBorder());
});

$(".changeBtnThree").click(function() {
    $(".thirdBox").css("background", colors[setBackground()]);
    $(".thirdBox").css("border", setBorder());
});

$(".changeAllBtns").click(function() {
    $(".firstBox").css("background", colors[setBackground()]);
    $(".firstBox").css("border", setBorder());
    $(".secondBox").css("background", colors[setBackground()]);
    $(".secondBox").css("border", setBorder());
    $(".thirdBox").css("background", colors[setBackground()]);
    $(".thirdBox").css("border", setBorder());
});

$(".hideBtnOne").click(function() {
    $(".firstBox").hide("slow");
});

$(".hideBtnTwo").click(function() {
    $(".secondBox").slideUp("slow");
});

$(".hideBtnThree").click(function() {
    $(".thirdBox").fadeOut("slow");
});

$(".hideAllBtns").click(function() {
    $(".firstBox,.secondBox,.thirdBox").hide("slow");
});

$(".resetBtn").click(function() {
        $(".firstBox").removeAttr('style');
        $(".secondBox").removeAttr('style');
        $(".thirdBox").removeAttr('style');
});

$(".showBtn").click(function() {
    $(".firstBox").show("slow");
    $(".secondBox").slideDown("slow");
    $(".thirdBox").fadeIn("slow");
});
