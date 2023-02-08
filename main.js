const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const mod = document.querySelector('.mode')

mod.addEventListener('click', () => {
    document.querySelector('.mainBox').classList.toggle('light')
})

setInterval(() => {
    let session = ''
    let date = new Date()
    let index = date.getDay()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()

    let hour = 30 * hours + minutes / 2
    let minute = 6 * minutes
    let second = 6 * seconds

    if(hours >= 12) {
        session = 'PM'
    }else {
        session = 'AM'
    }

    document.querySelector('.med').innerHTML = session
    document.querySelector('.date').innerHTML = week[index]

    document.querySelector('.hr').style.transform = `rotate(${hour}deg)`
    document.querySelector('.min').style.transform = `rotate(${minute}deg)`
    document.querySelector('.sec').style.transform = `rotate(${second}deg)`

    document.getElementById('hours').innerHTML = hours
    document.getElementById('minutes').innerHTML = minutes
    document.getElementById('seconds').innerHTML = seconds
}, 1000)