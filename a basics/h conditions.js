let a = prompt("Hi what's your age")

if(a>18){
    alert("please don't vote for current government");
    console.log("please don't vote for current government");
}else if(a==18){
    alert("first year of voting");
    console.log("first year of voting");
}else{
    alert("please don't vote anyone");
    console.log("please don't vote anyone");
}

let msg = (a < 18) ? 18-a + " years remaining to vote ": a - 18 + " times voted" 
alert(msg)
console.log(msg);