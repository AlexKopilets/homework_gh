function copyObject(obj) {
    var newObj = {};
    for (var prop in obj) {
        if (typeof obj[prop] == 'object') {
            newObj[prop] = cloneObject(obj[prop]);
        } else {
            newObj[prop] = obj[prop];
        }
    }
    return newObj;
}

var phone = {
    brand: 'Samsung',
    quantity: 5,
};

var newObject = copyObject(phone);
newObject.quantity = 10;
document.write(newObject.brand + "<br />" + newObject.quantity);
