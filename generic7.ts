interface IPerson {
    name: string;
    age: number;
}

const person: IPerson = {
    name: 'Mark',
    age: 39,
};

type Keys = keyof IPerson;
const keys: Keys = 'age';

// IPerson[keyof IPerson]
// => IPerson["name" | "age"]
// => IPerson["name"] | IPerson["age"]
// => string | number
// 이렇게 되면 keyof 을 썼음에도 결국 출력은 string, number 유니온 타입이 나오게 됨.
// 이를 고치기 위해 제네릭을 사용, 아래처럼.

function getProp<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

// 아래 두 함수 호출은 지정된 타입 하나로만 출력을 하게 됨.
getProp(person, 'age');
getProp(person, 'name');

function setProp<T, K extends keyof T>(obj: T, key: K, value: T[K]): void {
    obj[key] = value;
}

setProp(person, 'name', "asdf")