//setTimeout
setTimeout(fu,3000)
setTimeout(function() {
    console.log("펑")
},3000)

//SetInterval
let time = 30
undefined
setInterval(function() {
        if(time>=0){
    console.log(time)
    time= time - 1
 }
},1000)