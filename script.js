const name = prompt("Tell us your name")
document.getElementById("name").innerHTML = name;
document.getElementById("name").style.display = "contents";
document.getElementById("name").style.color = "blue";


document.getElementById("btn-chores").onclick = function ()
    {   
        function quantityChores () {
            let chores = parseInt(prompt("How many task you want to enter?"))
            console.log(chores)
            let list = new Array(chores)
            for(let i=1; i < chores; i++) {
                let toDo = prompt("Enter your " + i + " chore" )
                let date = new Date()
                let month = parseInt(date.getMonth()) + 1
                list.push(toDo + " this task was created the date " + date.getDate() + "/" + month + "/" + date.getFullYear() )
            }
            console.log(list)
        }

        
        quantityChores();
  
    }