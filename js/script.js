document.getElementById('activateFB').addEventListener('click', FizzBuzz);

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

        console.log(output);
    }
}