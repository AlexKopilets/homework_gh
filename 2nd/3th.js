var car = {
    brand: prompt("Введите марку машины","BMW"),
    model: prompt("Введите модель машины", "x6"),
    money: prompt("Сколько у вас денег?", "120000"),
    year: new Date(2017,08,08),
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
    toString: function () {
        return this.brand + ' ' + this.model + ' - ' + this.price();
    },
    toNum: function () {
        return 'Ваши деньги - ' + this.money.valueOf() + '$';
    }
}
var toJSON = JSON.stringify(car)

alert(car.toString());
alert(car.toNum());
alert(toJSON)
