$(".info .itemBox .item").click(function() {
    var state;
    if ($(this).siblings(".content").css("display") == "none") {
        state = "block";
        $(this).css("fontWeight", "bold");
    } else {
        state = "none";
        $(this).css("fontWeight", "normal");
    };
   $(this).siblings(".content").css("display",state);
});