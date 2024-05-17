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
// console.log(userConstructor3);
//-----------------------037-----------------Method-----------------
// console.clear();
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
// console.log(payment);
// console.log(time);
//-----------------------038-----------------Restart of Methods-----------------
console.clear();
class UserRestart {
    addSkill(skillOrSkills) {
        if (typeof skillOrSkills == 'string') {
            this.skills.push(skillOrSkills);
        }
        else {
            // this.skills.concat(skillOrSkills);
        }
    }
}
function runRestart(distance) {
    if (typeof distance === 'number') {
        return 1;
    }
    else {
        return 0;
    }
}
// console.log(runRestart(['dfgdg', 'sdghdrth']));
// console.log(runRestart(665951951));
class MyClass {
    constructor(id) {
        if (typeof id === 'number') {
            this.id = id;
        }
    }
}
// const myConstructortttt = new MyClass(1679867986798);
// console.log(myConstructortttt);
//-----------------------039-----------------Getter und Setter-----------------
class UserGetter {
    // getLogin(log: string) {
    //     this.login = 'user' + log;
    // }
    set login(log) {
        this._login = 'user-' + log;
    }
    get login() {
        return this._login;
    }
}
// 'user-'
// const userGetter = new UserGetter();
// userGetter.login = `user + ${userGetter.login}`;
const userGetter = new UserGetter();
userGetter.login = `myLogin`;
// userGetter.
console.log(userGetter);
console.log(userGetter.login);
class UserImplements {
    // pay(paymentId: number): void {
    //     ///
    // }
    pay(paymentId) {
        ///
    }
    delete() {
    }
}
;
// new UserImplements().
