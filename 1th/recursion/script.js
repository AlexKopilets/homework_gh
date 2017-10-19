function recursion(n) {
    var arr = [];
    if (n != 1) {
        return recursion(n - 1) + " " + n;
    } else {
        return "1";
    }
}

document.write(recursion(20));

