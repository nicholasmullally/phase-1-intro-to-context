const allWagesFor = function() {
    const eligibleDates = this.timeInEvents.map((e) => {
        return e.date
    })
}


function createEmployeeRecord(arr) {
    return {
        firstName: arr[0],
        familyName: arr[1],
        title: arr[2],
        payPerHour: arr[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

function calculatePayroll(records) {
    return records.reduce((acc, record) => {
        return allWagesFor.call(record) + acc
    }, 0)
}

function createEmployeeRecords(arr) {
    const result = arr.map(record => {
        return createEmployeeRecord(record)
    })
    return result
}

function wagesEarnedOnDate(date) {
    const numHours = hoursWorkedOnDate.call(this, date)
    return numHours * this.payPerHour
}

function findEmployeeByFirstName(records, firstName) {
    return records.find(record => record.firstName === firstName)

}

function hoursWorkedOnDate(date) {
    const timeIn = this.timeInEvents.find(record => record.date === date)
    const timeOut = this.timeOutEvents.find(record => record.date === date)
    return (timeOut.hour - timeIn.hour) / 100
}


function createTimeEvent(date, type) {
    return {
        type, 
        hour: parseInt(date.split(" ")[1]),
        date: date.split(" ")[0]
    }
}


function createTimeInEvent(date) {
    const newTimeObj = createTimeEvent(date, "TimeIn")
    this.timeInEvents.push(newTimeObj)
    return this
    }
  
function createTimeOutEvent(date) {
    this.timeOutEvents.push(createTimeEvent(date, "TimeOut"))
    return this
}
