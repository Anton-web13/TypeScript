"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
;
;
let userAliasesInterfaces = {
    name: 'asd',
    age: 23,
    skills: ['1', '2'],
    roleId: 1,
    createbAt: new Date(),
    log(id) {
        return '';
    }
};
;
;
// type UserName {
//     login: string,
//     password?: string,
// };
const userName = {
    login: 'ldkfhbg',
    password: '1',
};
// const multiply = (first: number, second: number = 5): number => {
const multiply = (first, second) => {
    // return first * second;
    if (!second) {
        return first * first;
    }
    return first * second;
};
;
const testPass = (user) => {
    var _a;
    // const t = user.password!.type;
    const t = (_a = user.password) === null || _a === void 0 ? void 0 : _a.type;
};
const test = (param) => {
    const t = param !== null && param !== void 0 ? param : multiply(5); // oder param oder multiply(5)
};
;
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus["Success"] = "success";
    PaymentStatus["Failed"] = "failed";
})(PaymentStatus || (PaymentStatus = {}));
;
;
;
;
;
// const get = (): IResponseSuccess | IResponseFailed => {
//     console.log();
// }
//-----------------------027-----------------Void-----------------
const logVoid = (id) => {
    console.log(id);
};
const aVoid = logVoid(1);
// const multiplyVoid = (f: number, s?: number): number | void => {
//     if (!s) {
//         return f * f;
//     }
//     // return f * s;
// };
const multiplyVoid = (f, s) => {
    if (!s) {
        return f * f;
    }
};
const f1 = () => {
};
const f2 = () => {
    return true;
};
const b = f2(); // wie bekommen void und mit dem Ergebnis können wir nix machen.
const voidSkills = ['Dev', 'Devops'];
const userVoid = {
    s: ['s'],
};
voidSkills.forEach((skill) => userVoid.s.push(skill));
//-----------------------028-----------------Unknown-----------------
console.clear();
let inputUnknown;
inputUnknown = 3;
inputUnknown = ['asd', 'sfdszdfg'];
// let resUnknown: string = inputUnknown; // Fehler
let resUnknown = inputUnknown;
const run = (input) => {
    if (typeof input == 'number') {
        input++;
    }
    else {
        input;
    }
};
const getData = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield fetch('');
    }
    catch (e) {
        if (e instanceof Error) {
            console.log(e.message);
        }
    }
});
// const getDataForce = async () => {
//     try {
//         await fetch('');
//     } catch(err) {
//         const e = err as Error;
//         // console.log(e);
//     }
// };
getData();
console.log(run(inputUnknown));
