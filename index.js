

function createEmployeeRecord([firstName, familyName, title, payPerHour]) {
    const employeeRecord = {
        firstName: firstName,
        familyName: familyName,
        title: title,
        payPerHour: payPerHour,
        timeInEvents: [],
        timeOutEvents: [],
    };
    return employeeRecord;
};

function createEmployeeRecords([...records]) {
    const employeesArray = records;
    let arrOfEmployeeObjects = [];
    for (const employeeArray of employeesArray) {
        arrOfEmployeeObjects.push(createEmployeeRecord(employeeArray));
    };
    return arrOfEmployeeObjects;
};

function createTimeInEvent(emplRecordObj, timeStamp) {
    const hour = Number.parseInt(timeStamp[11] + timeStamp[12] + "00");
    const date = timeStamp.slice(0,10);
    
    const timeInEvent = {
        type: "TimeIn",
        hour: hour,
        date: date,
    };
    emplRecordObj.timeInEvents.push(timeInEvent);
    return emplRecordObj;
};

function createTimeOutEvent(emplRecordObj, timeStamp) {
    const hour = Number.parseInt(timeStamp[11] + timeStamp[12] + "00");
    const date = timeStamp.slice(0,10);
    
    const timeOutEvent = {
        type: "TimeOut",
        hour: hour,
        date: date,
    };
    emplRecordObj.timeOutEvents.push(timeOutEvent);
    return emplRecordObj;
};

function timeInRecordLookup(emplRecordObj, date){

    for (let i = 0; i<emplRecordObj.timeInEvents.length; i++){
        if (emplRecordObj.timeInEvents[i].date === date){
            return emplRecordObj.timeInEvents[i].hour;
        };
    };
};

function timeOutRecordLookup(emplRecordObj, date){

    for (let i = 0; i<emplRecordObj.timeOutEvents.length; i++){
        if (emplRecordObj.timeOutEvents[i].date === date){
            return emplRecordObj.timeOutEvents[i].hour;
        };
    };
};

function hoursWorkedOnDate(emplRecordObj, date) {
    let hourIn = timeInRecordLookup(emplRecordObj, date);
    let hourOut = timeOutRecordLookup(emplRecordObj, date);
    return (hourOut - hourIn) / 100;
};

function wagesEarnedOnDate(emplRecordObj, date) {
    let payOwed = hoursWorkedOnDate(emplRecordObj, date) * emplRecordObj.payPerHour;

    return payOwed;
};

function allWagesFor(emplRecordObj) {
    let datesWorkedArr = [];
    for (const timeInEvent of emplRecordObj.timeInEvents) {
        datesWorkedArr.push(timeInEvent.date);
    };
    let totalOwedWages = 0;
    for (const day of datesWorkedArr) {
        totalOwedWages += wagesEarnedOnDate(emplRecordObj, day);
    }
    return totalOwedWages;
};

function calculatePayroll(arrOfEmplRecordObjects) {
    let payroll = 0;
    for (const emplRecordObj of arrOfEmplRecordObjects) {
        payroll += allWagesFor(emplRecordObj);
    };
    return payroll;
};