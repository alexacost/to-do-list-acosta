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
    let tag = document.createElement("p")
    var task = document.createTextNode(text)
    tag = tag.appendChild(task)
    let element = document.getElementById("new")
    element = element.appendChild(tag)

}
}

let trigger = document.getElementById("btn-list")

list(trigger)
