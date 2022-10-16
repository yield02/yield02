import Header from "./component/Header.js";
import Footer from "./component/Footer.js";
import {$, $$} from './component/query.js'
import html from './component/renderHTML.js'




function Main() {
    return html `
    <main>
        <div id="login_container">
            <h1 class="content-header-text">Đăng Nhập</h1>
            <div class="wrapper">
                <img src="./image/dangnhap/userlogin.png" class="login-icon">
                
                <div class="login_box">
                        <div class="input_box"><i class="fa-solid fa-envelope input_icons"></i><input type="email" class="login_input" placeholder="Nhập Email"></div>
                        <div class="input_box"><i class="fa-solid fa-key input_icons"></i><input type="password" class="login_input" placeholder="Nhập mật khẩu"></div>
                </div>
                <p>Bạn quên <a href="#">Mật khẩu?</a><input type="checkbox" id="login_checkbox">Ghi nhớ đăng nhập cho lần sau</p>
                
                <div class="submit_box">
                    <button>Đăng Nhập</button>
                    <button>Hủy</button>
                </div>
            </div>
        </div>
    </main>
    `
}





function Dangnhap() {
    return html `
        ${Header()}
        ${Main()}
        ${Footer()}
    

    `
}





$('body').innerHTML = Dangnhap();


