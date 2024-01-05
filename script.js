const date = new Date()
const datetag = document.getElementById("date")

const day = (date) => {
    switch(date.getDay()){
        case 1:
        default:
            return "Mon";
        case 2:
            return "Tue"
        case 3:
            return "Wed"
        case 4:
            return "Thur"
        case 5:
            return "Fri"
        case 6:
            return "Sat"
        case 7:
            return "Sun"
    }
}

const daydate = date.getDate()

const month = (date) => {
    switch(date.getMonth() + 1){
        case 1:
        default:
            return "Jan"
        case 2:
            return "Feb"
        case 3:
            return "Mar"
        case 4:
            return "Apr"
        case 5:
            return "May"
        case 6:
            return "Jun"
        case 7:
            return "Jul"
        case 8:
            return "Aug"
        case 9:
            return "Sep"
        case 10:
            return "Oct"
        case 11:
            return "Nov"
        case 12:
            return "Dec"
    }
}

const year = date.getFullYear()

datetag.innerHTML += ` <u>${day(date)} ,${daydate} ${month(date)} ${year}</u>`