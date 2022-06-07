let userName = prompt("Lütfen kullanıcı adını giriniz:")
let nameAdded = document.querySelector("#myName")
nameAdded.innerHTML = userName

function time () {
    let now = new Date()
    let hour = now.getHours()
    let minute = now.getMinutes()
    let seconds = now.getSeconds()
    let daysOfTheWeek = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]
    let addingTime = document.querySelector("#myClock")
    addingTime.innerHTML = hour + " : " +  minute + " : " + seconds + " - " + daysOfTheWeek[now.getDay()]

}

setInterval(time,1000); 
