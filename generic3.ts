function helloArray<T>(message : T[]): T
{
    console.log(message[0])
    return message[0];
}

helloArray(["hello", "World"]);
helloArray(["Hello", 5]);

function helloTuple<T, k>(message: [T, K]): T {
    return message[0];
}

helloTuple(["hello", "World"]);