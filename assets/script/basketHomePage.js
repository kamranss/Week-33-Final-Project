let buttons = document.querySelectorAll(".category2-button");
let basketCount = document.querySelector(".icon-up-span");

basketCountCalculator();

buttons.forEach(btn =>{
    btn.addEventListener("click", function(e){
        e.preventDefault();
        // let id = btn.parentNode.getAttribute("data-id");
        let id = btn.parentNode.parentNode.parentNode.parentNode.parentNode.getAttribute("data-id");
        console.log(id);
        // imgSRC = btn.parentNode.previousElementSibling.getAttribute("src");
        let imgSRC = btn.parentNode.parentNode.parentNode.previousElementSibling.firstElementChild.nextElementSibling.firstElementChild.getAttribute("src")

        console.log(imgSRC);
        
        // productName = btn.parentNode.firstElementChild.innerText
        productName = btn.parentNode.parentNode.parentNode.firstElementChild.firstElementChild.innerText
        console.log(productName);
        // price = btn.nextElementSibling.innerText
        price = btn.parentNode.parentNode.previousElementSibling.firstElementChild.nextElementSibling.innerText
        console.log(price);
        oldPrice = btn.parentNode.parentNode.previousElementSibling.firstElementChild.innerText
        console.log(oldPrice);


        Animate(e)
        // console.log(id);

        if (localStorage.getItem("basket") == null) {
            
            let arr = []

            arr.push({
                id: id,
                imgSRC: imgSRC,
                productName: productName,
                price:price,
                oldPrice: oldPrice,
                count: 1
            })

            localStorage.setItem("basket", JSON.stringify(arr));
            

        }
        else{

            let arr = JSON.parse(localStorage.getItem("basket"))
            
            let existProduct = arr.find(product => product.id == id);
            if (existProduct == undefined) {
                arr.push({
                    id: id,
                    imgSRC: imgSRC,
                    productName: productName,
                    price:price,
                    oldPrice: oldPrice,
                    count: 1
                })

            
            }
            else{
                existProduct.count++;
            }

            localStorage.setItem("basket", JSON.stringify(arr));
        }

        basketCountCalculator();
    
        
    })
})


function basketCountCalculator(){
    if (localStorage.getItem("basket") != null) {
        let arr =  JSON.parse(localStorage.getItem("basket"));
        basketCount.innerText = arr.length;
    }
}


function Animate(e){
    let parent = e.target.parentNode.parentNode.parentNode.previousElementSibling.firstElementChild.nextElementSibling
            console.log(parent);
            let image = parent.querySelector("img");
            console.log(image);
            let span = document.createElement("span");
            span.classList.add("image-mover", "image-size");
            
            parent.insertBefore(span, parent.lastElementChild);
            
            let s_image = image.cloneNode(true);
            span.appendChild(s_image);
          

}



