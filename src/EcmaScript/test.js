function hoisting() {
    console.log(a); // undefined
    var a = 1;
    console.log(a); // 1
}
hoisting();