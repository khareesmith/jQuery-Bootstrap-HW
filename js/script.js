// Global variables. Colors represents available colors for CSS selectors. Borders represents border-style options.
var colors = ["red","orange","yellow","green","blue","purple","brown","chocolate","darkgreen","deeppink","lightseagreen","navy","steelblue","lime","tomato","violet","chartreuse","darkred","gold","royalblue","firebrick"];
var borders = ["solid","dotted","dashed","double","inset","onset","groove"];

//Function to select random number between 0 and length of colors array. That number is returned.
function setBackground(){
    let backgroundColor = Math.floor(Math.random() * colors.length);
    return backgroundColor;
}

/* Function to select 2 random numbers between 0 and the lengths of both the colors array and borders array, creating an index. Those numbers are used to select a string from each array at that index. Each string is concatenated into a single string and returned. */
function setBorder() {
    let borderSelect = Math.floor(Math.random() * borders.length);
    let borderColor = Math.floor(Math.random() * colors.length);

    let newBorder = borders[borderSelect] + " " + colors[borderColor];
    return newBorder;
}

//When clicked will change background color and border of first box using functions created earlier.
$(".changeBtnOne").click(function() {
    $(".firstBox").css("background", colors[setBackground()]);
    $(".firstBox").css("border", setBorder());
});

//When clicked will change background color and border of second box using functions created earlier.
$(".changeBtnTwo").click(function() {
    $(".secondBox").css("background", colors[setBackground()]);
    $(".secondBox").css("border", setBorder());
});

//When clicked will change background color and border of third box using functions created earlier.
$(".changeBtnThree").click(function() {
    $(".thirdBox").css("background", colors[setBackground()]);
    $(".thirdBox").css("border", setBorder());
});

/* When clicked will change background color and border of all boxes using functions created earlier. Checks to see which boxes are displayed on screen before making changes. Starts on if all boxes are hidden and works through every possible condition.*/
$(".changeAllBtns").click(function() {
    if ($(".firstBox").css('display') == 'none' && $(".secondBox").css('display') == 'none' && $(".thirdBox").css('display') == 'none') {
        return;
    }
    else if ($(".firstBox").css('display') == 'none' && $(".secondBox").css('display') == 'none') {
        $(".thirdBox").css("background", colors[setBackground()]);
        $(".thirdBox").css("border", setBorder());
    }
    else if ($(".firstBox").css('display') == 'none' && $(".thirdBox").css('display') == 'none') {
        $(".secondBox").css("background", colors[setBackground()]);
        $(".secondBox").css("border", setBorder());
    }
    else if ($(".secondBox").css('display') == 'none' && $(".thirdBox").css('display') == 'none') {
        $(".firstBox").css("background", colors[setBackground()]);
        $(".firstBox").css("border", setBorder());
    }
    else if ($(".firstBox").css('display') == 'none') {
        $(".secondBox").css("background", colors[setBackground()]);
        $(".secondBox").css("border", setBorder());
        $(".thirdBox").css("background", colors[setBackground()]);
        $(".thirdBox").css("border", setBorder());
    }
    else if ($(".secondBox").css('display') == 'none') {
        $(".firstBox").css("background", colors[setBackground()]);
        $(".firstBox").css("border", setBorder());
        $(".thirdBox").css("background", colors[setBackground()]);
        $(".thirdBox").css("border", setBorder());
    }
    else if ($(".thirdBox").css('display') == 'none') {
        $(".firstBox").css("background", colors[setBackground()]);
        $(".firstBox").css("border", setBorder());
        $(".secondBox").css("background", colors[setBackground()]);
        $(".secondBox").css("border", setBorder());
    }
    else {
        $(".firstBox").css("background", colors[setBackground()]);
        $(".firstBox").css("border", setBorder());
        $(".secondBox").css("background", colors[setBackground()]);
        $(".secondBox").css("border", setBorder());
        $(".thirdBox").css("background", colors[setBackground()]);
        $(".thirdBox").css("border", setBorder());
    }
});

//When clicked will hide the first box using the hide() function.
$(".hideBtnOne").click(function() {
    $(".firstBox").hide("slow");
});

//When clicked will hide the second box using the slideUp() function.
$(".hideBtnTwo").click(function() {
    $(".secondBox").slideUp("slow");
});

//When clicked will hide the third box using the fadeOut() function.
$(".hideBtnThree").click(function() {
    $(".thirdBox").fadeOut("slow");
});

/*When clicked will create a random number between 0 and 2. That number is used to decide if all boxes will be hidden with the hide(), slideUp(), or fadeOut() function. */
$(".hideAllBtns").click(function() {
    let rand = Math.floor(Math.random() * 3);
    
    if (rand == 0) {
        $(".firstBox,.secondBox,.thirdBox").hide("slow");
    }
    else if (rand == 1) {
        $(".firstBox,.secondBox,.thirdBox").slideUp("slow");
    }
    else {
        $(".firstBox,.secondBox,.thirdBox").fadeOut("slow");
    }
});

/* When clicked will reset colors on boxes currently visible on the page. Checks when boxes are set as hidden and reset the styles of visibile elements. Starts on if all boxes are hidden and works through every possible condition. */
$(".resetBtn").click(function() {

    if ($(".firstBox").css('display') == 'none' && $(".secondBox").css('display') == 'none' && $(".thirdBox").css('display') == 'none') {
        return;
    }
    else if ($(".firstBox").css('display') == 'none' && $(".secondBox").css('display') == 'none') {
        $(".thirdBox").removeAttr('style');
    }
    else if ($(".firstBox").css('display') == 'none' && $(".thirdBox").css('display') == 'none') {
        $(".secondBox").removeAttr('style');
    }
    else if ($(".secondBox").css('display') == 'none' && $(".thirdBox").css('display') == 'none') {
        $(".firstBox").removeAttr('style');
    }
    else if ($(".firstBox").css('display') == 'none') {
        $(".secondBox").removeAttr('style');
        $(".thirdBox").removeAttr('style');
    }
    else if ($(".secondBox").css('display') == 'none') {
        $(".firstBox").removeAttr('style');
        $(".thirdBox").removeAttr('style');
    }
    else if ($(".thirdBox").css('display') == 'none') {
        $(".firstBox").removeAttr('style');
        $(".secondBox").removeAttr('style');
    }
    else {
        $(".firstBox").removeAttr('style');
        $(".secondBox").removeAttr('style');
        $(".thirdBox").removeAttr('style');
    }
});

/* When clicked will show all boxes using show() function for the first box, slideDown() function for the second box, and fadeIn() function for the third box */
$(".showBtn").click(function() {
    $(".firstBox").show("slow");
    $(".secondBox").slideDown("slow");
    $(".thirdBox").fadeIn("slow");
});
