

let coins = [];
function change(n){
    coins=[];
    while(n!=0){
        if (n>=25){
            coins.push("25");
            n = n-25;
        }
        else if (n>=10){
            coins.push("10");
            n = n-10;
        }
        else if (n>=5){
            coins.push("5");
            n = n -5;
        }
        else if (n>=1){
            coins.push("1");
            n = n - 1;
        }
    }
    console.log(coins);
}

console.log(change(83));
