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
//////////////////////////////////////////////////////
const firstInterface = (user) => {
    console.log(user);
};
// firstInterface({ name: 'Anton'}); 
//////////////////////////////////////////////////////
const first = (user) => {
    console.log(user);
};
// first('Anton');
//////////////////////////////////////////////////////
let revenue = 1000;
let bonus = 500;
let res = revenue + bonus;
// console.log(res);
//-------------------------011----------------------------
// function getFullName(firstname: string, surname: string): string {
//     return `${firstname} ${surname}`;
// };
// const getFullNameArrow = (firstname: string, surname: string): string => {
//     return `${firstname} ${surname}`;
// };
// console.log(getFullName('zsrfsdgf', 'zdgrfxdgd'));
// console.log(getFullNameArrow('234234', '23544567'));
// function getFullNameBoolean(firstname: boolean, surname: boolean) {
//     return `${firstname} ${surname}`;
// };
//-------------------------012----------------------------
function getFullNameBoolean(user) {
    return `${user.firstname} ${user.surname}`;
}
;
const user = {
    firstname: 'Anton',
    surname: 'Menschlich',
    city: 'Minsk',
    age: 33,
    skills: {
        dev: true,
        devops: true,
    }
};
// 
console.log(getFullNameBoolean(user));
//-------------------------013----------------------------
let info = {
    "officeId": 45,
    "isOpened": false,
    "contacts": {
        "phone": "+79100000000",
        "email": "my@email.ru",
        "address": {
            "city": "Москва"
        }
    }
};
//-------------------------014----------------------------
// const skills: string[] = ['dev', 'devops', 1];
const skills = ['Dev', 'Devops', 'Testing'];
for (const skill of skills) {
    // console.log(skill);
}
;
// console.log(
skills
    .filter((skill) => skill !== 'Devops')
    .map((skill) => { return 1; })
    .reduce((first, second) => first + second);
// );
//-------------------------015------Tuple----------------------
const skillTuples = [1, 'Devops'];
// const id = skillTuples[0];
// const skillName = skillTuples[1];
const [id, skillname] = skillTuples;
const arr = [1, 'Devops', true, false];
//-------------------------016------Readonly----------------------
const skillReadonly = [1, 'Devops'];
const skilsRead = ['1', 'Devops'];
const skilsReadJN = ['1', 'Devops'];
const skilsReadJNRead = ['1', 'Devops'];
//-------------------------017------Enums----------------------
// const resEnums = {
//     message: 'Die Beyzahlunf ist erfolgreich',
//     statusCode: 1,
// };
// enum StatusCode {
//     SUCCESS = 1,
//     IN_PROCESS,
//     FAILED,
// };
// // 1 - Erfolg
// // 2 - in Progress
// // 3 - anbgelehnt
var StatusCode;
(function (StatusCode) {
    StatusCode["SUCCESS"] = "s";
    StatusCode["IN_PROCESS"] = "p";
    StatusCode["FAILED"] = "f";
})(StatusCode || (StatusCode = {}));
;
// 's' - Erfolg
// 'p' - in Progress
// 'f' - anbgelehnt
const resEnums = {
    message: 'Die Beyzahlunf ist erfolgreich',
    statusCode: StatusCode.SUCCESS,
};
if (resEnums.statusCode === StatusCode.SUCCESS) {
}
;
function action(status) {
    // console.log(status);
}
;
action(StatusCode.IN_PROCESS);
const compute = () => {
    return 3;
};
var Roles;
(function (Roles) {
    Roles[Roles["ADMIN"] = 0] = "ADMIN";
    Roles[Roles["USER"] = compute()] = "USER";
})(Roles || (Roles = {}));
;
;
const res2 = Roles.ADMIN;
//-------------------------018---------Test-------------------
var StatusQuestions;
(function (StatusQuestions) {
    StatusQuestions["Published"] = "published";
    StatusQuestions["Draft"] = "draft";
    StatusQuestions["Deleted"] = "deleted";
})(StatusQuestions || (StatusQuestions = {}));
function getFaqs(req) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch('/faqs', {
            method: 'POST',
            body: JSON.stringify(req)
        });
        const data = yield res.json();
        return data;
    });
}
