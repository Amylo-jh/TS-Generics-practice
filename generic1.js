"use strict";
function hello(message) {
    return message;
}
console.log(hello("Mark").length);
console.log(hello(30).length);
function helloGeneric(message) {
    return message;
}
console.log(helloGeneric("Mark").length);
console.log(helloGeneric(17));
console.log(helloGeneric(true));
