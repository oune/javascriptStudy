function log(text) {
  for (var i = 0; i < num; i++) {
    console.log(`hello world! ${text} ${i}`);
  }
}

const calculater = {
  plus : function(x, y) {
    return x + y;
  }
}

console.log('hello, world!');
let num = 5;
log("hahah");
let num2 = calculater.plus(4,2);
log(num2);
