let clickButton = document.getElementById("btn-name")
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
list = (trigger) => {
    
trigger.onclick = () => {
    
    let text = document.getElementById("text")
    text = text.value
    let bullet = document.createElement("li") 
    let task = document.createTextNode(text)
    bullet.appendChild(task)
    let currentDiv = document.getElementById("current")
    let newBullet = document.body.insertBefore(bullet, currentDiv);
    let list = document.getElementById("current")
    list.appendChild(newBullet)

}
}

let trigger = document.getElementById("btn-list")

list(trigger)
