import html from './component/renderHTML.js'
import { $, $$} from './component/query.js'


// component

function Navbarindex() {
  return html`
    <ul class="nav-container">
      <li class="nav-btn"><a href="/">Home</a></li>
      <li class="nav-btn"><a href="#concent">Concent</a></li>
      <li class="nav-btn"><a href="#footer">Footer</a></li>
      <li class="nav-btn"><a href="./taskjs.html">Tính Tam Giác và Giai thừa</a></li>
      <li class="nav-btn"><a href="./English.html">English</a></li>
    </ul>
  `;
}



      // <li class="nav-btn"><a href="./trangchu.html">Trang Chủ</a></li>
      // <li class="nav-btn"><a href="./dangnhap.html">Đăng Nhập</a></li>







//Render html navBar Index file
$("#navbar").innerHTML = Navbarindex();
