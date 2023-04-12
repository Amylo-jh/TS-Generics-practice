function hello(message: any): any {
    return message;
}

console.log(hello("Mark").length);
console.log(hello(30).length);

function helloGeneric<T>(message: T): T {
    return message;
}

console.log(helloGeneric("Mark").length);
console.log(helloGeneric(17));
console.log(helloGeneric(true));