let tick = [];
let cont=0;

tick[0] = document.querySelector(".check-js-1");
tick[1] = document.querySelector(".check-js-2");
tick[2]= document.querySelector(".check-js-3");
tick[3] = document.querySelector(".check-js-4");
tick[4] = document.querySelector(".check-js-5");
tick[5] = document.querySelector(".check-js-6");
tick[6] = document.querySelector(".check-js-7");
tick[7] = document.querySelector(".check-js-8");




    setTimeout(()=>{
        cont++;
    },3000);

    tick[cont].style.visibility = "visible";
}while(cont<8);