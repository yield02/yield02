import hmtl from "./renderHTML.js";

function Header() {
  return hmtl`
    <header id ="Header">
        
   
        <div class="header_container">
            <img src="./image/logo.png" alt="" id="header-logo">
            <nav id = "header_navbar">
                <ul class="header_navlist">
                    <li><a href="../../trangchu.html">Trang chủ</a></li>
                    <li><a href="../../gioithieu.html">Giới Thiệu</a></li>
                    <li><a href="../../sanpham.html">Sản Phẩm</a></li>
                    <li><a href="../../tintuc.html">Tin Tức</a></li>
                    <li><a href="../../dangnhap.html">Đăng Nhập</a></li>
                    <li><a href="../../dangky.html">Đăng ký</a></li>
                    <li><a href="../../lienhe.html">Liên Hệ</a></li>
                </ul>
            </nav>
            <div class="header_find">
                <input  type="text" id = "find_input" placeholder="Nhập nội dung cần tìm">
                <div class="find_icons">
                    <i class="fa-solid fa-magnifying-glass header_find-icons"></i>
                </div>
                <div class="find_icons">
                    <i class="fa-solid fa-cart-shopping header_cart-icons"></i>
                </div>

            </div>
        </div>
    </header>`;
}

export default Header;
