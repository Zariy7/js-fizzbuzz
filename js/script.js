document.getElementById('activateFB').addEventListener('click', FizzBuzz);

function FizzBuzz(){
    let inputNumber = document.getElementById('inputNumber').value;
    let ul = document.getElementById('outputList');

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

        let li = `<li class="list-group-item"> ${output} </li>`;
        document.getElementById('outputList').innerHTML += li;
    }
}