// Code your solutions in this file

function writeCards(){

    const nombres = [
        "Guadalupe",
        "Ollie", 
        "Aki"
    ];

    let result = [];

    nombres.map((nombre) => {
        result.push("Thank you, " + nombre + ", for the wonderful surprise gift!");
    })
    
    return result;
}

function countDown(number){
    while(number >= 0) {
        console.log(number);
        number--;
    }


}


