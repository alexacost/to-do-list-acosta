// let clickButton = document.getElementById("btnName")
// clickButton.onclick = () => {
//    let name = document.getElementById("name")
//    name = name.value
//    if (name === "") {
//     let warning = document.getElementById("warning")
//     warning.className = "text-center text-danger mt-5"
//    } else {
//     let hello = document.getElementById("hi")
//     hello.className = "text-primary"
//     hello.innerHTML = name 
//     document.getElementById("first-container").className = "d-none"
//     warning.className = "d-none"
//     document.getElementById("second-container").className = "row content align-items-center justify-content-center"
//    }
// }


let trigger = document.getElementById("btnList")
let list = []
let counter = 0
let quantity = localStorage.getItem("task")
trigger.onclick = () =>  {
    if (quantity === null) { 
        let text = document.getElementById("text")
        text = text.value
        list.push(text)
        localStorage.setItem("task", JSON.stringify(list))
        let bullet = document.createElement("li")
        let task = document.createTextNode(text)
        bullet.appendChild(task)
        let currentDiv = document.getElementById("items")
        let newBullet = document.body.insertBefore(bullet, currentDiv);
        currentDiv.appendChild(newBullet)        
    } else {
        let text = document.getElementById("text")
        let stored = JSON.parse(localStorage.getItem("task"))
        stored.push(text.value)
        localStorage.setItem("task", JSON.stringify(stored))
        list = JSON.parse(localStorage.getItem("task"))
        console.log(list)
    }

    }
    let chores = JSON.parse(localStorage.getItem("task"))
    
        for (i=0;i<chores.length;i++) {
            let bullet = document.createElement("li")
            let task = document.createTextNode(chores[i])
            bullet.appendChild(task)
            let currentDiv = document.getElementById("items")
            let newBullet = document.body.insertBefore(bullet, currentDiv);
            currentDiv.appendChild(newBullet)

    }