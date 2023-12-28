let ul= document.querySelector("#list > ul");
let btn= document.querySelector("#add-new-btn");
let input = document.querySelector("#new-to-do-input");


btn.addEventListener('click',function (){

    let li= document.createElement('li')
    li.innerHTML = input.value
    ul.appendChild(li)
})