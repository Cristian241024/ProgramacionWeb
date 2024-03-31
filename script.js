const $openClose = document.getElementById("open-close"),
        $aside = document.getElementById("aside");

let listElements = document.querySelectorAll(".list__button");

listElements.forEach(listElement => {
    listElement.addEventListener('click', ()=>{
        listElement.classList.toggle("arrow");
        let height = 0;
        let menu = listElement.nextElementSibling;
    
        if(menu.clientHeight == "0"){
            height = menu.scrollHeight;
        }

        menu.style.height = `${height}px`;
    })
});

$openClose.addEventListener("click",()=>{
    $aside.classList.toggle("desplegar")
})


