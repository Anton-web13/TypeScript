"use strict";
//-----------------------035-----------------Create of class-----------------
console.clear();
class User {
    constructor(name) {
        this.name = name;
    }
}
const userClass = new User('Anton');
console.log(userClass);
userClass.name = 'Petr';
console.log(userClass);
////////////////////////////////////////////////////////////
class AdminTrue {
    constructor(role) {
        this.role = role;
    }
}
const adminTrue = new AdminTrue(2);
adminTrue.role = 1;
console.log(adminTrue);
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
class AdminFalse {
}
const adminFalse = new AdminFalse();
adminFalse.role = 1;
console.log(adminFalse);
////////////////////////////////////////////////////////////
