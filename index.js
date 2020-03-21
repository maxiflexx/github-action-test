const Calculator = require('./calc');
let calc = new Calculator();

console.log(`1 + 3 = ${calc.add(1,3)}`);

const Express = require('express');
const app = new Express();

app.get('/', (req, res) => res.send('Hello Express!'));


app.listen(3000, '0.0.0.0', () => console.log('server is started on port 3000'));

