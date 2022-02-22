let clickButton = document.getElementById("btnName")
clickButton.onclick = () => {
   let name = document.getElementById("name")
   name = name.value
   if (name === "") {
    let warning = document.getElementById("warning")
    warning.className = "text-center text-danger mt-5"
   } else {
    let hello = document.getElementById("hi")
    hello.className = "text-primary"
    hello.innerHTML = name 
    document.getElementById("first-container").className = "d-none"
    warning.className = "d-none"
    document.getElementById("second-container").className = "row content align-items-center justify-content-center"
   }
}


let trigger = document.getElementById("btnList")
let list = []
let counter = 0

trigger.onclick = () =>  {
    c = counter++
    let text = document.getElementById("text")
    text = text.value
    list.push(text)
    localStorage.setItem("counter", c)
    for (i=0;i<list.length;i++) {
        localStorage.setItem("task n " + i, list[i])
    }
    }
    quantity = localStorage.getItem("counter")
    console.log(quantity)
    // localStorage.setItem("task n " + quantity, list[quantity])


    
        

    // let bullet = document.createElement("li")
    // let task = document.createTextNode(text)
    // bullet.appendChild(task)
    // let currentDiv = document.getElementById("list")
    // let newBullet = document.body.insertBefore(bullet, currentDiv);
    // currentDiv.appendChild(newBullet)












