$(document).ready(function () {


  $(".button-container.active").on("click", function (e) {
   $(this.parentElement.firstElementChild).css('animation', 'rotateImage 2s ease');
   if(this.children[0].innerText !== "Đã nhận"){
       this.children[0].innerText = "Chờ xíu...";
       setTimeout(() => {
         this.children[0].innerText = "Đã nhận";
       }, 2000);
   }
  });


  //Thời gian online ở đây nè
  $("#time-update").html(10)
});
