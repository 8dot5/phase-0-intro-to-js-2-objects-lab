// Write your solution in this file!
const employee = {
    name: "Bo Jack",
    streetAddress: "33 USW"
}

function updateEmployeeWithKeyAndValue(obj, key, value) {
    return {
        ...obj,
        [key]: value,
    };
}

updateEmployeeWithKeyAndValue;

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;

    return obj;
}

destructivelyUpdateEmployeeWithKeyAndValue;

function deleteFromEmployeeByKey(obj, key, value) {
    const newObject = { ...obj };

    newObject[key] = value;

    return newObject;
}

const newEmployee = deleteFromEmployeeByKey[newObject.name];

newEmployee;

function destructivelyDeleteFromEmployeeByKey(obj, key, value) {
    obj[key] = value;

    return obj;
}

destructivelyDeleteFromEmployeeByKey;

