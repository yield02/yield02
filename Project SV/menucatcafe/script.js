
const $$ = document.querySelectorAll.bind(document);
const $ = document.querySelector.bind(document)

// console.log(1)

var main_selector = $('#main__body');

var listType = {
    Sushi: [
        {
            name: 'Sushi',
            cost: '$9.99',
            img: './img/items.PNG'
        },
        {
            name: 'Sushi2',
            cost: '$9.99',
            img: './img/items.PNG'
        },
        {
            name: 'Sushi3',
            cost: '$9.99',
            img: './img/items.PNG'
        },
        {
            name: 'Sushi4',
            cost: '$9.99',
            img: './img/items.PNG'
        },
        {
            name: 'Sushi5',
            cost: '$9.99',
            img: './img/items.PNG'
        },
        {
            name: 'Sushi6',
            cost: '$9.99',
            img: './img/items.PNG'
        },
    ],
    Hotpot: [
        {
            name: 'Thai HotPot',
            cost: '$9.99',
            img: './img/items.PNG'
        },
        {
            name: 'Thai HotPot',
            cost: '$9.99',
            img: './img/items.PNG'
        },
        {
            name: 'Thai HotPot',
            cost: '$9.99',
            img: './img/items.PNG'
        },
        {
            name: 'Thai HotPot',
            cost: '$9.99',
            img: './img/items.PNG'
        },
        {
            name: 'Thai HotPot',
            cost: '$9.99',
            img: './img/items.PNG'
        }
    ]
}




function rander(listType) {
    var main_html = `
        
    `


    for( const [key, values] of Object.entries(listType)) {
        var html = `
        <div class="type row">
            <div class="row header_items">
                <h5>${key}</h5>
            </div>
            <div class="row item-container">
        `

        values.forEach((value, index) => {
            html += 
            `
                <div class="col-3 item" data="${key}-${index}" onclick ="haddleClick(event)">
                     <img src="${value.img}" alt="" class="items-image">
                     <h5 class="item-name">${value.name}</h5>
                     <span class="item-cost">${value.cost}</span>
                </div>

            `
        });


        html = html + 
        `       </div>
            </div>
        `
        main_html += html;
    }
    // console.log(main_html)
    main_selector.innerHTML = main_html

}



function haddleClick(event) {
    var item;
    if(event.target.classList.contains('item')) {
        item = event.target
    }
    else {
        item = event.target.parentElement;
    }
    var main = $('#main');
    var accept_box = document.createElement('div');
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

    //Thao Tác Accept nè
    acceptBtn.onclick = function() {
        const cost = item.querySelector('.item-cost').textContent.slice(1);
        //cost là giá vật phẩm
        console.log(cost)





        main.removeChild(accept_box);
    }


    function hiddenAcceptBox() {
        main.removeChild(accept_box);
        console.log(1);
    }

    declineBtn.onclick = hiddenAcceptBox




}







function start() {
    rander(listType);
    // setTimeout(haddleClick, 1000);
}

start();