let pagination2 = document.querySelector(".page-number-22")
console.log(pagination2);

pagination2.addEventListener("click", function(){  
    let post1 = document.querySelector("#post-1")
    let post2 = document.querySelector("#post-2")
    let post3 = document.querySelector("#post-3")
    let post4 = document.querySelector("#post-4")

    console.log(post1);
    post1.classList.add("deactive")
    post2.classList.add("deactive")
    post3.classList.add("deactive")
    post4.classList.remove("deactive")
})