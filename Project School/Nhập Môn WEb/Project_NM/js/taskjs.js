const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const btn1 = $("#btn1");
const btn2 = $("#btn2");
const result1 = $("#result1");
const result2 = $("#result2");


function tinhtamgiac(a, b, c) {
    a = parseFloat(a);
    b = parseFloat(b);
    c = parseFloat(c);
    console.log(a+b);
    if( a<b+c && b<a+c && c<a+b ) {
        var p = a + b + c;
        console.log("Chu vi tam giác là: ", p);
        p = p / 2;
        var s = Math.sqrt(p*(p - a)*(p-b)*(p-c));
        console.log("Diện Tích Giam Giác là: ", s.toFixed(2));
        result1.innerHTML = `Diện Tích Tam Giác: ${s.toFixed(2)}. Chu Vi Tam Giác: ${(p*2).toFixed(2)}`
    }

    else {
        result1.innerHTML = 'Không phải là tam giác'
        
    }
}


function giaithua(n) {
    if(n<=1) {
        return 1;
    }
    return n * giaithua(n-1);
}


function handdleBtn2() {
    var n = $('#n').value;
    n = parseInt(n);
    if(n) {
        
        console.log(giaithua(n));
        result2.innerHTML = `Giai Thừa của số ${n} = ${giaithua(n)}`
    }
    else {
        result2.innerHTML = `Vui lòng nhập n`

    }
}


function handdleBtn1() {
    var a = $('#a').value;
    var b = $('#b').value;
    var c = $('#c').value;

    if(a, b, c) {
        tinhtamgiac(a, b, c);
    }
    else {
        result1.innerHTML = 'Vui lòng nhập đầy đủ a b c'

    }
}

btn1.onclick = handdleBtn1;
btn2.onclick = handdleBtn2;




function chanchiahetchonam(n) {
    for(var i = 0; i < n; i++) {
        if(i%5==0 && i % 2 == 0) {
            console.log(i);
        }
    }
}





console.log("Bài 1:");
chanchiahetchonam(100);
console.log("Bài 2:");
var aa = ['A', 'B', 'C', 'D'];

aa.forEach((item) => {
    if(item === 'C') {
        console.log(item);
    }
})

