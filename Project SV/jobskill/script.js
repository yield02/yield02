$(document).ready(function () {
  $barWidth = $(".progress").width();
  $(".shade").css("width", $barWidth);

  $("#close").on("click", function (e) {
    $("#skill_box").hide();
  });
});
