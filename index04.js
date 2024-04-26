"use strict";
//-----------------------019-----------------Union-----------------
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
const logMultipleIds = (a, b) => {
    if (a === b) {
        console.log(a, b);
    }
    else {
        console.log(b);
    }
};
logMultipleIds('5454', true);
