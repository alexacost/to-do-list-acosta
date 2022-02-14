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

let input = document.getElementById("toDo")

input.addEventListener("keypress", (e) => {
    if(e.keyCode === 13) {
        e.preventDefault()
        let newInput = document.createElement("input")
        let element = document.getElementById("new")
        element.appendChild(newInput)
    }
})



