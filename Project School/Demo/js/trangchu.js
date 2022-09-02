import Header from "./component/Header.js";
import Footer from "./component/Footer.js";
import {$, $$} from './component/query.js'
import html from './component/renderHTML.js'



function body() {
    return html
    `
    <main>
        <div id="sliders"></div>
        <div id="content">
            
            <div id="new-product">
                <h1 class="content-header-text">SẢN PHẨM MỚI</h1>
                <h3 class="header-text">Sửa chua tốt cho sức khỏe</h4>
                <div class="new-product-content">
                    <img src="./image/creamimg.jpg" class="new-product-img"alt="">
                    <p>Sửa chua là một loại thực phẩm được tạo ra từ quá trình lên men sữa của các vi khuẩn. Hầu hết các loại sữa đều có thể dùng làm sửa chua. Tuy nhiên sữa bò là được dùng nhiều hơn hết. Sữa chua hay được gọi là yaurt ( là da-ua). Chúng được lên men từ sữa động vật nhờ vi khuẩn lactic, đã được khử chất béo và thanh trùng ở nhiệt độ 80 - 90 độ C. Sữa chua có 2 loại cơ bản là sữa chua có đường và sữa chua không đường. bên cạnh đó còn có loại sữa chua uống, sữa chua men sống. Váng sữa thường được chia làm 3 loại dựa vào hàm lượng chất béo có trong sna3 phẩm: sữa có hàm lượng chất béo cao nhất ( 35 - 50%) chất béo), váng sữa thông thường (10-30% chất béo), váng sữa nguyên kem (6-15% chất béo). 
                        <a href="#">Xem chi tiết</a>
                    </p>
                </div>
            </div>

            <div id="member">
                <h1 class="content-header-text">GÓC THÀNH VIÊN</h1>
                <h3 class="header-text">Sửa chua làm tại nhà</h4>
                <div class="member-content">
                    <p> Học làm sữa chua tại gia cùng chuyên gia. Trong thực đơn dinh dưỡng của các bà mẹ cho con trẻ và các thành viên trong gia đình đều không thể thiếu món sữa chua thơm ngon, hấp dẫn và cực kỳ tốt cho sức khỏe này. Tuy nhiên, đa phần đều chọn mua sữa chua công nghiệp đã được đóng hộp bán sẵn tại các siêu thị và cửa hàng hơn là sữa chua tự làm tại nha. Như vậy, liệu sữa chua nhà làm và sữa chua công nghiệp thì loại nào tốt cho sức khỏe của chúng ta hơn?? Nếu tla2 một người yêu thích nấu ăn bạn sẽ chọn sữa chua nhà làm hay mua sữa chua công nghiệp bên ngoài. Sữa chua nhà làm đảm bảo về độ an toàn, chất lượng cũng như giá thành rẻ 
                        <a href="#">Xem chi tiết</a>
                    </p>
                    <!-- <img src="./image/creamimg.jpg" class="new-product-img"alt=""> -->
                    <video src="youtu.be/jfKfPfyJRdk" controls="true" id="member-video"></video>
                </div>
            </div>

            <div id="guide">
                <h3 class="header-text">Hướng dẫn làm sữa chua không đường</h4>
                <div class="guide_container">
                    <div>
                        <h4 class="guide-header">Nguyên liệu làm sữa chua không đường</h4>
                        <ul class="guide-list">
                            <li>1 lít sữa tươi không đường</li>
                            <li>1 hộp sữa chua men cái không đường (bạn có thể mua sữa chua đóng hộp không đường như Vinamilk, TH true milk...</li>
                            <li>Dụng cụ nấu và ú sữa chua</li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="guide-header">Các bước thực hiện</h1>
                        <ol class="guide-list">
                            <li>Cho sữa chua không đường vào nồi, đun nóng và khuấy đều, nhẹ tay theo 1 chiều. Tới khi sữa đạt khoảng 40 độ C thì tắt bếp. Bạn có thể dùng tay để kiểm tra, thấy sữa ấm vừa phải là được</li>
                            <li>Đồ hộp sữa chua làm men cái vào khuấy đều, múc vào hũ và đem đi ủ 6-8 tiếng</li>
                            <li>Sau khi ủ xong, bạn có thể dùng 1 hũ sữa chua vừa ủ để ăn thử, nếu thấy đạt vị sữa chua rồi có thể bảo quản trong ngăn mát tủ lạnh và thưởng thức dần nhé</li>
                        </ol>
                    </div>
                </div>
            </div>


            <div id="contact">
                    <h3 class="header-text">Đặt hàng ngay</h4>
                
                    <div class="contact-list">
                        <div class="contact-items">
                            <img src="./image/contact1.PNG" alt="">
                        </div>
                        <div class="contact-items">
                            <img src="./image/contact2.PNG" alt="">
                        </div>
                        <div class="contact-items">
                            <img src="./image/contact3.PNG" alt="">
                        </div>
                        <div class="contact-items">
                            <img src="./image/contact4.PNG" alt="">
                        </div>
                    </div>
            </div>

        </div>
    
    </main>
    
    `
}







function Trangchu() {
    return html `
    ${Header()}
    ${body()}
    ${Footer()}    
    `
}




$('body').innerHTML = Trangchu();