let hour = document.getElementById('hr')
let min = document.getElementById('min')
let sec = document.getElementById('sec')


 setInterval(start,1000)



function start() { 
    let count = new Date()

    if (  count.getHours() < 10){
        hour.innerHTML = '0'+count.getHours()
    }
    else{
      hour.innerHTML =  count.getHours()   
    }
    if (  count.getMinutes() < 10){
       min.innerHTML = '0'+count.getMinutes()
    }
    else{
     min.innerHTML =  count.getMinutes()   
    }
    if (  count.getSeconds() < 10){
        sec.innerHTML = '0'+count.getSeconds()
    }
    else{
      sec.innerHTML =  count.getSeconds()   
    }
    

 }