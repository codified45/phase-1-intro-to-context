

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

function createTimeInEvent() {

};

function createTimeOutEvent() {

};

function hoursWorkedOnDate() {

};

function wagesEarnedOnDate() {

};

function allWagesfor() {

};

function calculatePayroll() {

};