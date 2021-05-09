'use strict';

{
    const btn =document.getElementById('btn')

    btn.addEventListener('click' , () =>{
        const results = ['和食','洋食','中華'];
        
        const n = Math.floor(Math.random() * results.length);
        btn.textContent = results[n];


    //     switch (n){
    //         case 0:
    //             btn.textContent ="和食";
    //             break;
    //         case 1:
    //             btn.textContent ="洋食";
    //             break;
    //         case 2:
    //         　　 btn.textContent ="中華";
    //             break;
    //     }
    });
}