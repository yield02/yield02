import {listType} from './config.js'
import  handdleOnclick  from './handdle.js'
const $$ = document.querySelectorAll.bind(document);
const $ = document.querySelector.bind(document)
window.$ = $;
window.$$ = $$;
var main = $('#main');

// console.log(1)
var main_selector = $('#main__body');

window.handdleOnclick = handdleOnclick;
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
                <div class="col-3 item" data="${key}-${index}" onclick ="handdleOnclick(event)">
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

function HanddleremoveChild() {
    const accept_box = $('.accept-box');
    // console.log(accept_box);
    if(accept_box)
        main.removeChild(accept_box);

}

window.HanddleremoveChild = HanddleremoveChild;



const handdleRemoveChild = () => {
    $('body').setAttribute('onkeyup',   "event.keyCode === 27 && HanddleremoveChild()")
    
}








function start() {
    rander(listType);
    handdleRemoveChild()
}

start();