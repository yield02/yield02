const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);













function chooseHanddle() {
    
    //Xử lý Active 
    const chooseList = $$('.type-items');
    // console.log(chooseList);
    chooseList.forEach(Item => {
        Item.onclick = function(event) {
            $('.type-items.active').classList.remove('active');
            Item.classList.add('active');
        }
    });


}


function submit() {
    const listInput = $$('.input');
    // console.log($('.type-items.active').id)
    const checkvalue = Array.from(listInput).some(item => item.value);

    if(checkvalue) {
        
        const output = {}
        listInput.forEach(item => {
            output[item.id] = item.value;
        })
 
        return {
            type: $('.type-items.active').id,
            ...output
        }
    }
    else {
        $('.toast-mess').textContent = 'Vui lòng nhập đầy đủ!!!';
    }

}




function start() {
    chooseHanddle()
}


start()