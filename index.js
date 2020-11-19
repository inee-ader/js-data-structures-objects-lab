// Write your solution in this file!
let driver = {}

function updateDriverWithKeyAndValue(obj, k, v) {
    return Object.assign({}, driver, {[k]: v})   
}
function destructivelyUpdateDriverWithKeyAndValue(driver, k, v) {
    driver[k] = v
    return driver
}
function deleteFromDriverByKey(driver, key) {
    const newObj = Object.assign({}, driver)
    delete newObj[key]
    return newObj
}
function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key]
    return driver
}

// function deleteFromDriverByKey(driver, key) {
//     const temp = Object.assign({}, driver)
//     delete temp[key]
//     return temp
// }
// function destructivelyDeleteFromDriverByKey(driver, key) {
//     delete driver[key]
//     return driver
// }
