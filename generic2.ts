function helloBasic<T, U>(message: T, comment : U): T {
    console.log(comment);
    return message;
}

helloBasic<string, number>("hello", 39);
helloBasic(36, "hellw world");