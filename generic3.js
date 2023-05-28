"use strict";
function helloArray(message) {
    console.log(message[0]);
    return message[0];
}
helloArray(["hello", "World"]);
helloArray(["Hello", 5]);
function helloTuple(message) {
    return message[0];
}
helloTuple(["hello", "World"]);
