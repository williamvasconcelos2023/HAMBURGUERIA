const myUL = document.querySelector("ul")
const mybutton = document.querySelector("#foreach")
const mybuttonMap = document.querySelector("#map")
const mybuttonReduce = document.querySelector("#reduce")
const mybuttonFilter = document.querySelector("#filter")


function burguer(burgueres){

let myLi = ''

burgueres.forEach( product => {
     myLi = myLi + `
     
     <li>
     <img src=${product.src}>  
     <p>${product.name}</p> 
     <p class="name-price">R$ ${product.price}</p>
     </li>
     `                                     
    })
    myUL.innerHTML = myLi
}
                
function buttonmapp(){

    const newmenu = menuOptions.map (product => {

        return{

        name: product.name,
        vega: product.vegan,
        price: product.price * 0.9,
        src: product.src,
        }                
    })

   burguer(newmenu)
}

function buttonReduce(){

const newReduce = menuOptions.reduce( (acc, product) => acc + product.price , 0)



myUL.innerHTML = ` 
     
                <li>
                
                <p> o valor total dos produtos é R$ ${newReduce}</p>

                </li>
                    `
}


function buttonFilter(){

const meuFilter = menuOptions.filter (product => product.vegan)
    
burguer(meuFilter)
}



mybutton.addEventListener("click", () => burguer(menuOptions))
mybuttonMap.addEventListener("click", buttonmapp)
mybuttonReduce.addEventListener("click", buttonReduce)
mybuttonFilter.addEventListener("click", buttonFilter)

