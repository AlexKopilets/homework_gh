function fn() {
    Object.defineProperty(this, 'obj', {
        get: function() {
            console.log('свойство прочитали');
        },
        set: function() {
            console.log('свойство изменили');
        }
    });
}

var myObject = new fn();

myObject.obj; //проверка на чтение
myObject.obj = " "; //проверка на изминение

