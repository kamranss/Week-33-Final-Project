let flatRate = document.querySelector(".flat-rate");
let localPickUp = document.querySelector(".local-pickup")

if (localStorage.getItem("shipment") == null) {
            
    let arr2 = []
    
    arr2.push({
        fRate: 0,
        lPickUp: 0
        
    })

    localStorage.setItem("shipment", JSON.stringify(arr2));
    

}
else{

    let arr = JSON.parse(localStorage.getItem("shipment"))
    
    // let existProduct = arr.find(product => product.id == id);
    if (existProduct == undefined) {
        arr.push({
            fRate: 0,
            lPickUp:0
        })

    
    }
    else{
        existProduct.count++;
    }

    localStorage.setItem("basket", JSON.stringify(arr));
}
