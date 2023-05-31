function generateRandomNumber(min,max) {
    return Math.round(Math.random() * (max - min) + min)
}

function playGame(userName) {
    const n = generateRandomNumber(1,100)
    let chances = 7
    while(chances>=1){
        const numberTried = prompt("Guess the number")
        if(numberTried==n){
            alert(`Congratulations ${userName} you won !`)
            return ;
        }else if(numberTried > n){
            alert(`oops ${userName} you tried a bigger number !`)
            chances--
        }else{
            alert(`oops ${userName} you tried a smaller number !`)
            chances--
        }
    }
    alert(`${n} was the number you lost this time`)
}
playGame('Harsh')