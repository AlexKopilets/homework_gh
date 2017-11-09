var arr = [];
var firstObject = {};
var secondObject = {};

function benchmarking(a) {
    var date = new Date();
    for (var i = 0; i < 100; i++) a();
    return new Date() - date;
}
for (var i = 0; i < 100; i++) { //Создаем массив
    arr.push("key-" + i);
}
for (var i = 0; i < 100; i++) { //Создаем первый объект
    var key = "key1-" + i;
    firstObject[key] = key;
}
for (var i = 0; i < 100; i++) { //Создаем второй объект
    var key  = Math.random();
    key = key.toFixed(2);
    key = "key2-"  + key;
    secondObject[key] = key;
}

//Первая проверка массива
function arrTest() {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = 'key' + i + i;
    }
}

function arrTest2() {
    for (var key in arr) {
        arr[i] = 'key' + i + i;
    }
}

document.write('Функция <b style="color:red">arrTest</b> выполнялась: ' + benchmarking(arrTest) + 'мс <br />'  );
document.write('Функция <b style="color:red">arrTest2</b> выполнялась: ' + benchmarking(arrTest2) + 'мс <br /><br />' );

if (benchmarking(arrTest) > benchmarking(arrTest2)) {
    document.write( 'Функция <b style="color:red">arrTest</b> выполнялась дольше <br /><br /><br /><br />' );
} else {
    document.write( 'Функция <b style="color:red">arrTest2</b> выполнялась дольше <br /><br /><br /><br />' );
}

//Проверка первого obj
function objTest() {
    for (var key in firstObject) {
        arr[key] = 'key' + i + i;
    }
}

function objTest2() {

    var length = Object.keys(firstObject).length;
    for (var i = 0; i < length; i++) {
        for (var key in firstObject) {
            var obj = {};
            obj[key] = firstObject[key];
        }
    }
}

document.write( 'Функция <b style="color:red"> objTest</b> выполнялась: ' + benchmarking(objTest) + 'мс<br />' );
document.write( 'Функция <b style="color:red"> objTest2</b> выполнялась: ' + benchmarking(objTest2) + 'мс<br /><br />' );
if (benchmarking(objTest) > benchmarking(objTest2)) {
    document.write( 'Функция <b style="color:red">objTest</b> выполнялась дольше<br /><br /><br /><br />' );
} else {
    document.write( 'Функция <b style="color:red">objTest2</b> выполнялась дольше<br /><br /><br /><br />' );
}

//Проверка второго obj
function obj2Test() {
    for (var key in secondObject) {
        arr[key] = 'key' + i + i;
    }
}

function obj2Test2() {

    var length = Object.keys(secondObject).length;
    for (var i = 0; i < length; i++) {
        for (var key in secondObject) {
            var obj = {};
            obj[key] = secondObject[key];
        }
    }
}

document.write( 'Функция <b style="color:red"> obj2Test</b> выполнялась: ' + benchmarking(obj2Test) + 'мс<br />' );
document.write( 'Функция <b style="color:red"> obj2Test2</b> выполнялась: ' + benchmarking(obj2Test2) + 'мс<br /><br />' );

if (benchmarking(obj2Test) > benchmarking(obj2Test2)) {
    document.write( 'Функция <b style="color:red">obj2Test</b> выполнялась дольше' );
} else {
    document.write( 'Функция <b style="color:red">obj2Test2</b> выполнялась дольше' );
}