function User(fullName) {
    this.fullName = fullName;
}
var alex = new User("Алексей Копылец");

Object.defineProperty(alex, "firstName", {
    get: function(){
        return this.fullName.split(' ')[0];
    },
    set: function(value){
        var info = this.fullName.split(' ');
        info[0] = value;
        this.fullName = info.join(' ');
    }
});
Object.defineProperty(alex, "lastName", {
    get: function(){
        return this.fullName.split(' ')[1];
    },
    set: function(value){
        var info = this.fullName.split(' ');
        info[1] = value;
        this.fullName = info.join(' ');
    }
});

alert( alex.firstName ); // Алексей
alert( alex.lastName ); // Копылец

// запись в lastName
alex.lastName = 'Тэтгрем';

alert( alex.fullName ); // Алексей Тэтгрем




var man = {};

Object.defineProperty( man, "name", {
    value: "Alex",
    writable: false, // запрещаем измениние значения свойства
    configurable: false // запрещаем удаление
});

man.name = "Peter"; // пробуем изменить свойство
delete man.name; // пытаемся удалить свойство
alert(man.name); // выведет Alex