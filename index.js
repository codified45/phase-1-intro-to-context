

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
    let arrOfEmployeeObjects = []
    for (const employeeArray of employeesArray) {
        arrOfEmployeeObjects.push(createEmployeeRecord(employeeArray));
    };
    return arrOfEmployeeObjects;
};

function createTimeInEvent(emplRecordObj, timeStamp) {
    const hour = timeStamp[11] + timeStamp[12];
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
    const hour = timeStamp[11] + timeStamp[12];
    const date = timeStamp.slice(0,10);
    
    const timeOutEvent = {
        type: "TimeOut",
        hour: hour,
        date: date,
    };
    emplRecordObj.timeOutEvents.push(timeOutEvent);
    return emplRecordObj;
};

function hoursWorkedOnDate() {

};

function wagesEarnedOnDate() {

};

function allWagesfor() {

};

function calculatePayroll() {

};