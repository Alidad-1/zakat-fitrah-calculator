function fitra(){
let row1Price = document.getElementById('Price1').value;
let row1Person = document.getElementById('Person1').value;
let row1Amount = document.getElementById('amount1');
let calculate1 = row1Person*row1Price;
row1Amount.innerText = `${calculate1} PKR`;

let row2Price = document.getElementById('Price2').value;
let row2Person = document.getElementById('Person2').value;
let row2Amount = document.getElementById('amount2');
let calculate2 = row2Person*row2Price;
row2Amount.innerText = `${calculate2} PKR`;

let row3Price = document.getElementById('Price3').value;
let row3Person = document.getElementById('Person3').value;
let row3Amount = document.getElementById('amount3');
let calculate3 = row3Person*row3Price;
row3Amount.innerText = `${calculate3} PKR`;


let row4Price = document.getElementById('Price4').value;
let row4Person = document.getElementById('Person4').value;
let row4Amount = document.getElementById('amount4');
let calculate4 = row4Person*row4Price;
row4Amount.innerText = `${calculate4} PKR`;

let row5Price = document.getElementById('Price5').value;
let row5Person = document.getElementById('Person5').value;
let row5Amount = document.getElementById('amount5');
let calculate5 = row5Person*row5Price;
row5Amount.innerText = `${calculate5}PKR`;

let span = document.getElementById('span');
span.innerText = `${calculate1 + calculate2 + calculate3 + calculate4 +calculate5} PKR`; 
}
document.getElementById('main_rapper').addEventListener('input', fitra);
fitra()


let show =document.getElementById('show_Due_zakat');
let calculate = document.getElementById('calculate');
calculate.addEventListener('click',function() {
    let goldValue =+document.getElementById('Gold_Value').value;
    let Cash = +document.getElementById('Cash').value;
    let Liability = +document.getElementById('Liability').value;
   
   let findDueZakat = `${(((goldValue+Cash)-Liability)*0.025).toFixed(2)}`
show.innerHTML = `You Due Amount for Zakat is ${findDueZakat} PKR `;


 })