const currentDate = function () {
    const date = new Date()
    console.log(date)
    return 'date'
}

const months = ['JAN', 'FEB', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER']
function currentMonth () {
    const date1 = new Date()
    const month = months[date1.getMonth()]
    console.log(month)
}

function batchInfo () {
    console.log('Lithim, W3D6, the topic for today is Nodejs module system')
}

module.exports.myDate = currentDate;
module.exports.myMonth = currentMonth;
module.exports.info = batchInfo;