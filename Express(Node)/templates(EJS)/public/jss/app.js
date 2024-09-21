let btns = document.querySelectorAll("button");

for(let btn of btns){
    btn.addEventListener('click', () =>{
        alert("button was click")
        console.log("button was click");
    })
}