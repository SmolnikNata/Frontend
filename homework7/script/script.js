 let new_div = document.querySelector('#existingElement');
let par_new = document.createElement('p');
par_new.innerText = 'HELLO world';
 new_div.after(par_new);
//

 let h_new = document.createElement('h1');
 h_new.innerText = 'Hello Google';
 let div1 = document.querySelector('#parentElement');
div1.append(h_new);
h_new.remove();
//////////////////////////////

let delit = document.createElement('p');
delit.classList.add('removeMe');
div1.after(delit);
delit.remove();

////////////////////////////


let arr_cart = [
    {title:'Product1',unit_price: 10,count:4},
    {title:'Product2',unit_price: 18,count: 9},   
    {title:"Product3",unit_price: 25,count:7}, 
    {title:"Product4",unit_price: 12,count:1}, 
];    
    // console.log(arr_cart);
let conteiner = document.querySelector('.conteiner');
for(let i =0;i<arr_cart.length;i++){
    let block = document.createElement('div');
    block.classList.add('block');
    conteiner.append(block);

    let prod = document.createElement('p');
    let price = document.createElement('p');
    let count = document.createElement('p');

    prod.innerText = arr_cart[i].title;
    price.innerText= arr_cart[i].unit_price;
    count.innerText= arr_cart[i].count;
    
    block.append(prod,price,count);
}

function createProductCards(){
    let conteiner = document.querySelector('.conteiner2');
    let total_price = 0;
    let total_count =0;
    for(let i =0;i<arr_cart.length;i++){
        let block = document.createElement('div');
        block.classList.add('block2');
        conteiner.append(block);
    
        let prod = document.createElement('p');
        let price = document.createElement('p');
        let count = document.createElement('p');
    
        prod.innerText = arr_cart[i].title;
        price.innerText= arr_cart[i].unit_price;
        count.innerText= arr_cart[i].count;
        
        block.append(prod,price,count);
        total_price =arr_cart[i].unit_price +total_price;
        total_count =arr_cart[i].count +total_count;

    }  
    let sum = document.createElement('p');
    sum.innerText =  `summ = ${total_price},count = ${total_count}`;
    conteiner.append(sum);

}
createProductCards()


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 

 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 


  



 
