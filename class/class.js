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
//-----------------------036-----------------Constructor-----------------
console.clear();
class UserConstructor {
    constructor(ageOrName, age) {
        if (typeof ageOrName === 'string') {
            this.nameeeeee = ageOrName;
        }
        else if (typeof ageOrName === 'number') {
            this.age = ageOrName;
        }
        if (typeof age === 'number') {
            this.age = age;
        }
    }
}
const userConstructor = new UserConstructor('Anton'); // Schritt 1
const userConstructor2 = new UserConstructor();
const userConstructor3 = new UserConstructor(33);
const userConstructor4 = new UserConstructor('Anton', 34);
//-----------------------037-----------------Method-----------------
console.clear();
var PaymentStatusMethod;
(function (PaymentStatusMethod) {
    PaymentStatusMethod[PaymentStatusMethod["Holded"] = 0] = "Holded";
    PaymentStatusMethod[PaymentStatusMethod["Processed"] = 1] = "Processed";
    PaymentStatusMethod[PaymentStatusMethod["Reversed"] = 2] = "Reversed";
})(PaymentStatusMethod || (PaymentStatusMethod = {}));
;
class PaymentMethod {
    constructor(id) {
        this.createdAt = new Date();
        this.id = id;
        this.status = PaymentStatusMethod.Holded;
    }
    ;
    getPaymenyLifeTime() {
        return new Date().getTime() - this.createdAt.getTime(); // this take from constructor
    }
    unholdPayment() {
        if (this.status == PaymentStatusMethod.Processed) {
            throw new Error('Die Zahlung kann nicht zurückgegeben werden!');
        }
        this.status = PaymentStatusMethod.Reversed;
        this.updatesAt = new Date();
    }
}
;
const payment = new PaymentMethod(1);
const time = payment.getPaymenyLifeTime();
payment.unholdPayment();
console.log(payment);
console.log(time);
