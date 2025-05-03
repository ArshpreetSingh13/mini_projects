



let habitList = []
let goallist = []

let History = document.getElementById("History")


function savedata() {

    localStorage.setItem("data", History.innerHTML)
    
    
    
}
function showdata() {
    
    document.getElementById("History").innerHTML = localStorage.getItem("data")
}

function todaysavedata() {

    localStorage.setItem("todaydata", Today.innerHTML)
    
    
    
}
function todayshowdata() {
    
    document.getElementById("Today").innerHTML = localStorage.getItem("todaydata")
}

todayshowdata()
showdata()






document.getElementById("add").addEventListener("click", () => {
    let goal = document.getElementById("goal").value
    let time = document.getElementById("time").value


    let li1 = document.createElement("li");
    li1.innerHTML = goal + ' complete before '+time + '<span onclick="go(this)">' + "Toggle✅" + "</span>"
    document.getElementById("Today").appendChild(li1)
    todaysavedata()



    let li2 = document.createElement("li");
    li2.innerHTML = goal
    document.getElementById("History").appendChild(li2)

    savedata()



})

function go(btn){
    const cli = btn.parentElement;

    cli.classList.add("checks");
    document.getElementById('msg').innerHTML ="You are never too old to set another goal or to dream a new dream."
    setTimeout(() => {
        document.getElementById("msg").innerHTML = ""

    }, 2000)
    todaysavedata()
    
}





document.getElementById("clear").addEventListener('click', () => {
    let Today = document.getElementById("Today").innerHTML = ''

})

document.getElementById("hisCleasr").addEventListener('click', () => {
    localStorage.clear("data")
    showdata()
    localStorage.clear("todaydata")
    todayshowdata()
    localStorage.clear("data")
    showdata()
    localStorage.clear("Habitdata")
    ShowHabit()

})











// Habit

let TodayHabit = document.getElementById("TodayHabit")

function saveHabit() {
    localStorage.setItem("Habitdata", TodayHabit.innerHTML)

}
function ShowHabit() {

    document.getElementById("TodayHabit").innerHTML = localStorage.getItem("Habitdata")
}

ShowHabit()






document.getElementById("addHabit").addEventListener("click", () => {




    let habit = document.getElementById("habit").value
    prehabit = document.getElementById("TodayHabit").innerHTML
    document.getElementById("TodayHabit").innerHTML = prehabit + '<div class="card-Body">' + habit + '<span id="up" class="but up" onclick="moveUp(this)"> up </span> <span id="down" class="but down" onclick="moveDown(this)" >down</span>'+'</div>'

    habitList.push(habit)

    saveHabit()









})



document.getElementById("clearHabit").addEventListener('click', () => {
    let Today = document.getElementById("TodayHabit").innerHTML = ''

})


document.getElementById("sort").addEventListener('change', () => {
    let Sort = document.getElementById("sort").value

    prehabit = ''

    if (Sort == 1) {


        habitList.sort()

        for (let k in habitList) {



            document.getElementById("TodayHabit").innerHTML = prehabit + '<div class="card-Body">' + habitList[k] + '</div>'

            prehabit = document.getElementById("TodayHabit").innerHTML

            
            
        }
       

    }
    if (Sort == 2) {


        habitList.reverse()
      

        for (let k in habitList) {



            document.getElementById("TodayHabit").innerHTML = prehabit + '<div class="card-Body">' + habitList[k] + '</div>'

            prehabit = document.getElementById("TodayHabit").innerHTML
        }


    }
})



function moveUp(btn) {
    const li = btn.parentElement;
    const prev = li.previousElementSibling;
    if (prev) {
        li.parentElement.insertBefore(li, prev);
    }
}

function moveDown(btn) {
    const li = btn.parentElement;
    const next = li.nextElementSibling;
    if (next) {
        li.parentElement.insertBefore(next, li);
    }
}


document.getElementById("HabitCleasr").addEventListener('click', () => {
    localStorage.clear("Habitdata")
    ShowHabit()

})
