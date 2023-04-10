document.querySelector(".page-number-2").onclick==function(){

    document.querySelectorAll(".posttt").forEach(element =>{
        element.classList.add("deactive")
    })
    document.querySelector("#post-4").classList.remove("deactive")
}





// let post1 = document.querySelector("#post-1")
// let post2 = document.querySelector("#post-2")
// let post3 = document.querySelector("#post-3")
// let post4 = document.querySelector("#post-4")

// console.log(post1);
// post1.classList.add("deactive")
// post2.classList.add("deactive")
// post3.classList.add("deactive")
// post4.classList.remove("deactive")



// document.getElementById("next").onclick=function(){
//     document.querySelectorAll(".visib").forEach(element => {
//         element.classList.add("d-none");
//     });
//     document.querySelector("#invisible").classList.remove("d-none");
// }

// document.getElementById("prev").onclick=function(){
//     document.querySelectorAll(".visib").forEach(element => {
//         element.classList.remove("d-none");
//     });
//     document.querySelector("#invisible").classList.add("d-none");
// }
