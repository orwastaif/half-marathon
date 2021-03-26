var beginRange = Number (prompt("enter the begining number"));

var endRange = Number (prompt("enter the end number"));

function checkDivision(beginRange=1, endRange=100){
    for (let number = beginRange ; number <= endRange ; number++) {

        if(number % 2 == 0 && number % 3 == 0 && number % 10 == 0  ){
            console.log(`${number} the number is even , a multiple of 3, a multiple of 10`);
         }
        else if (number % 2 ==0 && number % 3 ==0){
              console.log(`${number} the number is even , a multiple of 3`);
         }
        else if ( number % 10 == 0){
            console.log(`${number} the number is mutiple of 10`);
         }
        else if(number % 3 == 0){
           console.log(`${number} the number is multiple of 3`);
         }
        else if(number % 2 == 0){
        console.log(`${number} the number is even`);
         }
        else{
        console.log(`${number}-`);
        }
    }
}

checkDivision ();

