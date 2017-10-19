function copyObject(obj) {
    var newObj = {};
    for (var prop in obj) {
        if (typeof obj[prop] == 'object') {
            newObj[prop] = copyObject(obj[prop]);
        } else {
            newObj[prop] = obj[prop];
        }
    }
    return newObj;
}

var phone = {
    brand: 'Samsung',
    quantity: 5
};

var newObject = copyObject(phone);
newObject.quantity = 12;
document.write(newObject.brand + "<br />" + newObject.quantity);
