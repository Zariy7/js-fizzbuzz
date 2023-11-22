document.getElementById('activateFB').addEventListener('click', FizzBuzz);
const ul = document.getElementById('outputList');

function FizzBuzz(){
    let inputNumber = document.getElementById('inputNumber').value;

    for(i = 1; i <= inputNumber; i++){

        let output = '';

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

        //let li = `<li class="list-group-item"> ${output} </li>`;
        //ul.innerHTML += li;

        let li = document.createElement('li');
        li.setAttribute('class', `list-group-item`);
        li.innerText = `${output}`;
        ul.appendChild(li);
    }
}