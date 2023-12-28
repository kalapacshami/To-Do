let ul= document.querySelector("#list > ul");
let btn= document.querySelector("#add-new-btn");
let input = document.querySelector("#new-to-do-input");


btn.addEventListener('click', cliclHandler)

input.addEventListener('keypress',cliclHandler)

    
function cliclHandler(e){
    
    if(e.type === 'click' || e.key==='Enter'){
        if(input.value!== ''){
            let li= document.createElement('li')
            li.innerHTML = input.value
            ul.appendChild(li)

            li.addEventListener('click', function(){
            this.classList.toggle('ready')
            })
                input.value='';

            }

    }
    
}



