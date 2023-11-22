document.getElementById('activateFB').addEventListener('click', FizzBuzz);
let ul = document.getElementById('outputList');

function FizzBuzz(){
    ul.innerHTML = '';
    let inputNumber = document.getElementById('inputNumber').value;

    for(i = 1; i <= inputNumber; i++){

        let output = '';

        //appendChild li ADDON - part 1
        let li = document.createElement('li');
        li.setAttribute('class', `list-group-item`);
        li.setAttribute('id', `list-item-${i}`);

        //THIS if ASSIGNS VALUE TO THE 'output' STRING
        if(i % 3 == 0 || i % 5 == 0){
            if(i % 3 == 0){
                output += 'Fizz';
            }
            if(i % 5 == 0){
                output += 'Buzz';
            }
        }
        else{
            output = i;
        }

        //SINCE IT DOESN'T CHECK FOR i DIVISIBLE BY BOTH 3 AND 5 YOU CAN'T FILTER FIZZBUZZ DIRECTLY
        //HAVE TO CREATE A SEPARATE IF OR CHANGE THE ORIGINAL ONE DEPENDING ON USE REQUIRED
        if(output == 'FizzBuzz'){
            li.classList.add('bg-dark');
            li.classList.add('text-light');
        }

        //STRING CONCATENATION li ADDON
        //let li = `<li class="list-group-item"> ${output} </li>`;
        //ul.innerHTML += li;

        //appendChild li ADDON - part 2
        li.innerText = `${output}`;
        ul.appendChild(li);
        //HAVE TO SEPARATE THEM IF WE WANT TO ADD MORE CLASSES OR CHANGE THE li BEYOND THE BASICS
    }
}