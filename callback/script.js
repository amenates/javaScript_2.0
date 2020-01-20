function first(x) {
    console.log(1);
    x();
}

function second(a,b) {
    console.log(a*b);
}

first(() => {
    second(5,7);
});
//second();