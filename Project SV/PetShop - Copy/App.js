function html ([first, ...strings], ...values) {

    return values.reduce(
        (acc, curr) => acc.concat(curr, strings.shift())
        ,[first]
    ).filter(x => x && x !== true || x === 0)
    .join('');
}

var test = (name) => {
    console.log(name)
};

// window.test = test;


function App() {
    return html `
        <button onclick = "test('aa')">name</button>
    `
}

export default App;