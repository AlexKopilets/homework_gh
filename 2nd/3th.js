var car = {
    brand: prompt("Введите марку машины","BMW"),
    model: prompt("Введите модель машины", "x6"),
    money: prompt("Сколько у вас денег?", "120000"),
    dateRelease: new Date(2015,06,12),
    moneyCount: function (){
        return this.money;
    },
    price: function () {
        if (this.moneyCount() < 120000) {
            return "У вас не хватает денег";
        }
        else {
            return "Вы можете приобрести эту машину";
        }
    },
    toString: function (){
        return 'Машина: ' + this.brand + ', модель: ' + this.model + ', цена: ' + this.money + '$ \n' + this.price();
    },
    valueOf: function (){
        return new Date().getFullYear() - this.dateRelease.getFullYear();
    },
    toJSON: function(){
        return this.brand + this.model + ' ' + this.money + ' ' + this.dateRelease;
    }
};

var toJSON = JSON.stringify(car);

alert (car.toString());
alert ('На момент покупки машины, ей ' + Number(car) + ' года');
alert(toJSON);