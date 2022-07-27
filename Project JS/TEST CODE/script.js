
var testobject = {
    name: "TestObject",
    description: "A test object.",
}


var brand = 0;
var course = 'JavaScript';












function html ([first, ...strings], ...values) {
    return values.reduce(
        (acc, cur) => {
            console.log('acc', acc);
            console.log('cur', cur);

            return [...acc, ...cur, strings.shift()]},
        [first]
        ).join('');
}
    
function html1 ([first, ...strings], ...values) {
        return values.reduce(
            
            (acc, cur) => {
                console.log('acc1', acc);
                console.log('cur1', cur);
                return acc.concat(cur, strings.shift())},
            [first]
            ).join('');
}




console.log(html`<ul>${1}</ul>`);
console.log(html1`<ul>${course}</ul>`)