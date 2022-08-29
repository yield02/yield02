export default function handdleOnclick (event) {
    
    var item;
    if(event.target.classList.contains('item')) {
        item = event.target
    }
    else {
        item = event.target.parentElement;
    }
    var main = $('#main');
    if($('.accept-box')) {
        $('.accept-box').remove();
    }
    var accept_box = document.createElement('div');
    accept_box.click();
    accept_box.classList.add('accept-box');
    accept_box.innerHTML = 
    `
    <p>Bạn có đồng ý mua ${item.querySelector('.item-name').textContent}</p>
    <button type="button" class="btn btn-primary" id="accept">Đồng Ý</button>
    <button type="button" class="btn btn-danger" id="decline">Hủy</button>
    `
    main.appendChild(accept_box);

    var acceptBtn = $("#accept");
    var declineBtn = $("#decline");


    //Thao Tác Accept nèx
    acceptBtn.onclick = function() {
        const cost = item.querySelector('.item-cost').textContent.slice(1);
        //cost là giá vật phẩm
        console.log(cost)





        main.removeChild(accept_box);
    }
    function removeAcceptBox() {
        if(accept_box)
            main.removeChild(accept_box);
        
    }

    //Delete accept box
    declineBtn.onclick = removeAcceptBox

    
}



