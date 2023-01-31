$(document).ready(function () {

  $(".submitBtn").on("click", function (e) {
    var textvalue = $("#text").val();
    //Gửi
    if(textvalue.trim() !== "") {
      $("#textmessage").html("Đã gửi lời chúc thành công!")


    }
    else {
      $("#textmessage").html("Bạn chưa nhập lời chúc.")

    }
  })
});
