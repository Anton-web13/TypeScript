"use strict";
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
function getFullNameBoolean(user) {
    return `${user.firstname} ${user.surname}`;
}
;
const user = {
    firstname: 'Anton',
    surname: 'Menschlich',
    city: 'Minsk',
    age: 33,
};
console.log(getFullNameBoolean(user));
