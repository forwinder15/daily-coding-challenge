let coins = [];
function change(n){
    coins=[0,0,0,0];
    while(n!=0){
        if (n>=25){
          const di = Math.floor(n/25);
            coins[0] = di;
           n = n % 25;
        }
        else if (n>=10){
          const di = Math.floor(n/10);
            coins[1] = di;
           n = n % 10;
        }
        else if (n>=5){
          const di = Math.floor(n/5);
            coins[2] = di;
           n = n % 5;
        }
        else if (n>=1){
          const di = Math.floor(n/1);
            coins[3] = di;
           n = n % 1;
      }
    }
    console.log(coins);
  }

console.log(change(34));
console.log(change(78));
console.log(change(21));
