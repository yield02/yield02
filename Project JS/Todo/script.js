import html from './core.js'

const cars = ['BMW', 'Porsche']

const output = html`
    <h1></h1>
    <ul>
        ${cars.map(car => `<li>${car}</li>`)}
    </ul>

`
console.log(output)