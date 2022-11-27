const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

var itemList = {
    sp001: { name: 'Sữa Chua Vị Kiwi', price: 21000, photo: 'images/sanpham/kiwi.jpg' },
    sp002: { name: 'Sữa Chua Vị Xoài', price: 22000, photo: 'images/sanpham/mango.jpg' },
    sp003: { name: 'Sữa Chua Vị Dưa lưới', price: 23000, photo: 'images/sanpham/cantaloupe.jpg' },
    sp004: { name: 'Sữa Chua Vị Mâm Xôi', price: 24000, photo: 'images/sanpham/blackberry.jpg' },
    sp005: { name: 'Sữa Chua Vị Dâu Tây', price: 25000, photo: 'images/sanpham/strawberry.jpg' },
    sp006: { name: 'Sữa Chua Vị Việt Quất', price: 26000, photo: 'images/sanpham/blueberry.jpg' },
    sp007: { name: 'Sữa Chua Vị Bưởi', price: 27000, photo: 'images/sanpham/grapes.jpg' },
    sp008: { name: 'Sữa Chua Vị Táo Xanh', price: 28000, photo: 'images/sanpham/green-apple.jpg' },
    sp009: { name: 'Sữa Chua Vị Dứa', price: 29000, photo: 'images/sanpham/pineapple.jpg' },
};

function loginValidate(frm) {
    var emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (frm.email.value.trim() == '') {
        alert('Vui long nhap email');
        frm.email.focus();
        return false;
    } else if (emailReg.test(frm.email.value) === false) {
        alert('Email sai dinh dang');
        frm.email.focus();
        return false;
    }

    var reg = new RegExp('.{8,}');
    if (frm.psw.value.trim() === '') {
        alert('Vui long nhap pass');
        frm.psw.focus();
        return false;
    } else if (reg.test(frm.psw.value.trim()) == false) {
        alert('Vui long nhap pass lon hon 8 ky tu');
        frm.psw.focus();
        return false;
    }

    return true;
}

function registerValidate(frm) {
    var emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (frm.email.value.trim() == '') {
        alert('Vui long nhap email');
        frm.email.focus();
        return false;
    } else if (emailReg.test(frm.email.value) === false) {
        alert('Email sai dinh dang');
        frm.email.focus();
        return false;
    }

    var reg = new RegExp('.{8,}');
    if (frm.psw.value.trim() === '') {
        alert('Vui long nhap pass');
        frm.psw.focus();
        return false;
    } else if (reg.test(frm.psw.value.trim()) == false) {
        alert('Vui long nhap pass lon hon 8 ky tu');
        frm.psw.focus();
        return false;
    }

    if (frm['psw-repeat'].value != frm.psw.value.trim()) {
        alert('Mat khau nhap lai bi sai');
        frm['psw-repeat'].value = '';
        frm['psw-repeat'].focus();
        return false;
    }

    return true;
}

function checkKeySearch(e) {
    var key = e.which || e.keyCode;
    if (key == 32) doSearch();
}

function doSearch() {
    var form = document.forms['frm-search'];
    if (form.words.value.length > 0) {
        form.submit();
    }
}

function showSearch() {
    var url = new URL(window.location);
    console.log(url);
    var ws = url.searchParams.get('words');
    console.log(ws);
    if ($('#searchDetail')) $('#searchDetail').innerHTML = `<h1>Tu khoa tim: ${ws}</h1>`;
}

function addCart(code) {
    console.log(code);
    var number = parseInt(document.getElementById(code).value);
    var name = itemList[code].name;
    if (number == 0) {
        reutnr;
    }
    if (typeof localStorage[code] === 'undefined') {
        window.localStorage.setItem(code, number);
    } else {
        var current = parseInt(window.localStorage.getItem(code));
        if (current + number > 100) {
            window.localStorage.setItem(code, 100);
            alert(
                'Mỗi mặt hàng chỉ có thể đặt 100 sản phẩm cho mỗi đơn hàng. Bạn đã đặt 100 sản phẩm của ' +
                    name +
                    'này.',
            );
            return;
        } else window.localStorage.setItem(code, current + number);
    }
    alert(
        'Đã cập nhật sản phẩm' +
            name +
            'với số lượng ' +
            name +
            ' vào giỏ hàng. Số lưỡng sản phẩm ' +
            name +
            ' đã đặt là ' +
            parseInt(window.localStorage.getItem(code) + '.'),
    );
}

function openCart() {
    window.location.href = 'donhang.html';
}

function getDiscountRate() {
    var d = new Date();
    var weekday = d.getDay();
    var totalMins = d.getHours() * 60 + d.getMinutes();
    if (
        (weekday >= 1 && weekday <= 3 && totalMins >= 420 && totalMins <= 660) ||
        (totalMins >= 780 && totalMins <= 1020)
    ) {
        return 0.1;
    }
    return 0;
}

function showCart() {
    const showContainer = $('#show_container');
    let html = '';
    var bill_prev_tax_total = 0;
    var bill_discount = 0;
    for (const [key, value] of Object.entries(itemList)) {
        const quantity = JSON.parse(window.localStorage.getItem(key));
        if (quantity > 0) {
            console.log(bill_prev_tax_total);
            bill_prev_tax_total += value.price * quantity;
            html += `
            <tr id="cart${key}">
                <td align="center"><img src="${value.photo}"></img></td>
                <td>${value.name}</td>
                <td align="right">${quantity}</td>
                <td align="right">${value.price} đ</td>
                <td align="right">${value.price * quantity} đ</td>
                <td align="center"><i class='fa fa-trash icon-pink' onclick="removeCart(cart${key})"></i></td>
            </tr>
            `;
        }
    }

    bill_discount = getDiscountRate() * bill_prev_tax_total;
    var bill_tax = 0.1 * (bill_prev_tax_total - bill_discount);
    var bill_total = bill_prev_tax_total - bill_discount + bill_tax;

    showContainer.innerHTML = html;

    $('#bill_pre_total').innerHTML = bill_prev_tax_total + ' đ';
    $('#bill_discount').innerHTML = bill_discount + ' đ';
    $('#bill_tax').innerHTML = parseFloat(bill_tax) + ' đ';
    $('#bill_total').innerHTML = parseFloat(bill_total) + ' đ';
}

function removeCart(element) {
    var key = element.id.slice(4);
    if (window.localStorage[key]) {
        const showContainer = $('#show_container');
        localStorage.removeItem(key);
        showContainer.removeChild(element);
    }
    showCart();
}
