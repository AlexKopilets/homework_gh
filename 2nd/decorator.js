//разширяем функциональность alert

(function () {
    addCallListener = function(func, callback){
        var callNumber = 0;
        return function(){
            var args = [].slice.call(arguments);
            var result;
            try {
                result = func.apply(this, arguments);
                callNumber++;
            } catch (e) {
                callback(e, args, this, callNumber);
                throw e;
            }
            callback(result, args, this, callNumber);
            return result;
        }
    }
    alert = addCallListener(alert, function(result, args, self, callNumber){
            console.log(args[0]);
        }
    );
    alert("Этот текст появится в консоле");
})();





function fn(a, b) {

}

function makeLogging(fn, arr) {
    return function() {
        var args = [].slice.call(arguments);

        var result = args.reduce(function(sum, current) {
            return sum + current;
        }, 0);

        arr.push(result);

        return fn.call(this, arguments);

    }
}
var arr = [];
fn = makeLogging(fn, arr);

fn(1, 3, 5, 11);
fn(1, 3, 5, 12, 23);

alert(arr)

