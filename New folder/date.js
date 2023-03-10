function getDate(){
    let today=new Date()
    let currentDay=today.getDay()
    let options = {
    weekday:"long",
    day:"numeric",
    month:"long",
    year:"numeric"
    }

    let day=today.toLocaleDateString("en-US",options)
    return day
}

function getDay(){
    let today=new Date()
  
    let options = {
    weekday:"long"
    }

    let day=today.toLocaleDateString("en-US",options)
    return day
}

module.exports.getDate=getDate

module.exports.getDay=getDay
