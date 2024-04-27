"use strict";
//-----------------------020-----------------Union-----------------
let arrUnion = ['xdfgdgdfg', true, 1];
const logId = (id) => {
    // console.log(arrUnion);
    // for (let i = 0; i < arrUnion.length; i++) {
    //     console.log(arrUnion[i].toUpperCase())
    // }
    if (typeof id === 'string') {
        console.log(id.toUpperCase());
    }
    else if (typeof id === 'number') {
        console.log(id);
    }
    else {
        console.log(id);
    }
};
// logId(arrUnion[0]);
// logId(arrUnion[1]);
// logId(arrUnion[2]);
const logError = (err) => {
    if (Array.isArray(err)) {
        console.log(err);
    }
    else {
        console.log(err);
    }
};
const logObject = (obj) => {
    if ('a' in obj) {
        console.log(obj.a);
    }
    else {
        console.log(obj.b);
    }
};
// let a: 1 = 1; a ist für immer 1.
const logMultipleIds = (a, b) => {
    if (a === b) {
        console.log(a, b);
    }
    else {
        console.log(b);
    }
};
const fetchWithAuth = (url, method) => {
    return 1;
};
let userAliases = {
    name: 'asd',
    age: 23,
    skills: ['1', '2'],
};
// let userWithRole: UserWithRole = {
//     id: 1,
//     name: 'asd',
//     age: 23,
//     skills: ['1', '2'],
// };
let userWithRole = {
    user: {
        name: 'asd',
        age: 23,
        skills: ['1', '2'],
    },
    role: {
        name: 'sfgdfg',
        id: 1,
    }
};
console.log(userWithRole);
