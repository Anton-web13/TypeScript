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
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _VehicleSicht_price;
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
        this.createdAt = new Date();
    }
    get login() {
        return this._login;
    }
    // set password(pas: string) {
    //     // nur SYNC und das ist schlecht, weil wir da den Strom blockieren.
    // }
    setPassword(pas) {
        return __awaiter(this, void 0, void 0, function* () {
            // async benutzen wir hier.
        });
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
class PaymentExtends {
    constructor(id) {
        this.status = 'new';
        this.id = id;
    }
    ;
    pay() {
        this.status = 'paid';
    }
}
class ParsistendExtendsPayment extends PaymentExtends {
    constructor() {
        const id = Math.random();
        super(id);
    }
    ;
    save() {
        //
    }
    ;
    pay(date) {
        super.pay();
        this.status = 'paid';
        if (date) {
            this.paidAt = date;
        }
    }
}
;
// new PaymentExtends().
// new ParsistendExtendsPayment().
//-----------------------042-----------------Besonderheit von Extends-----------------
console.clear();
class UserBesonderheit {
    constructor() {
        this.name = 'user';
        console.log(this.name);
    }
}
class AdminBesonderheit extends UserBesonderheit {
    constructor() {
        super();
        this.name = 'admin';
        console.log(this.name);
    }
}
;
// new AdminBesonderheit();
// new Error('');
class HttpErrorBesonderheit extends Error {
    constructor(message, code) {
        super(message);
        this.code = code !== null && code !== void 0 ? code : 500;
    }
}
//-----------------------043-----------------Komposition gegen Extends-----------------
class UserKomposition {
    constructor(name) {
        this.name = name;
    }
}
class UsersKomposition extends Array {
    searchByName(name) {
        return this.filter((some) => some.name === name);
    }
    toString() {
        return this.map((some) => some.name).join(', ');
    }
}
// new UsersKomposition().
const usersKomposition = new UsersKomposition();
usersKomposition.push(new UserKomposition('Vasz'));
usersKomposition.push(new UserKomposition('123'));
// usersKomposition.push('65165');                 // Error
// console.log(usersKomposition.toString());
class UserListKomposition {
    push(some) {
        this.users.push(some);
    }
}
// const someUsers = new UserListKomposition();
class PaymentKomposition {
}
;
// class UserWithPaymentKomposition extends PaymentKomposition {
//     name: string;
// }
class UserWithPaymentKomposition {
    constructor(user, payment) {
        this.payment = payment;
        this.user = user;
    }
}
//-----------------------044-----------------Sicht der Eigenschaften-----------------
console.clear();
// class VehicleSicht {
//     make: string;                   // so oder
//     public make: string;            // so
// }
// new VehicleSicht().make = 'd';
class VehicleSicht {
    constructor() {
        _VehicleSicht_price.set(this, void 0);
    }
    set model(mod) {
        this._model = mod;
        __classPrivateFieldSet(this, _VehicleSicht_price, 100, "f");
    }
    get model() {
        this.run;
        this.damages;
        return this._model;
    }
    isPriceEqual(some) {
        return __classPrivateFieldGet(this, _VehicleSicht_price, "f") === __classPrivateFieldGet(some, _VehicleSicht_price, "f");
    }
    addDamage(damage) {
        this.damages.push(damage);
    }
}
_VehicleSicht_price = new WeakMap();
class EuroTruckSicht extends VehicleSicht {
    setDamage() {
        // keinen Zugang zu den privaten Variablen (private), nur zu den öffentlichen(public)
    }
    setRun(km) {
        this.run = km / 0.62;
        // this.damage - error
        // this.price - error
        // this.#price - error
    }
}
// new VehicleSicht().
//-----------------------045-----------------Übung-----------------
console.clear();
class ProductÜbung {
    constructor(id, title, price) {
        this.id = id;
        this.title = title;
        this.price = price;
    }
    ;
}
class DeliveryÜbung {
    constructor(date) {
        this.date = date;
    }
    ;
}
class HomeDeliveryÜbung extends DeliveryÜbung {
    constructor(date, address) {
        super(date);
        this.address = address;
    }
    ;
}
class ShopDeliveryÜbung extends DeliveryÜbung {
    constructor(shopId) {
        super(new Date());
        this.shopId = shopId;
    }
    ;
}
class CartÜbung {
    constructor() {
        this.products = [];
    }
    addProduct(product) {
        this.products.push(product);
    }
    deleteProduct(productId) {
        this.products = this.products.filter((p) => p.id !== productId);
    }
    getSum() {
        return this.products
            .map((p) => p.price)
            .reduce((p1, p2) => p1 + p2);
    }
    setDelevery(delivery) {
        this.delivery = delivery;
    }
    checkOut() {
        if (this.products.length == 0) {
            throw new Error('Es gibt keine Waren im Korb');
        }
        if (!this.delivery) {
            throw new Error('Die Lieferung ist nicht eingewiesen');
        }
        return { success: true };
    }
}
const cartÜbung = new CartÜbung();
cartÜbung.addProduct(new ProductÜbung(1, 'Cake', 10));
cartÜbung.addProduct(new ProductÜbung(2, 'Kuchen', 30));
cartÜbung.addProduct(new ProductÜbung(3, 'Chocolate', 20));
cartÜbung.deleteProduct(1);
cartÜbung.setDelevery(new HomeDeliveryÜbung(new Date(), 'to Berlin'));
// console.log(cartÜbung);
// console.log(cartÜbung.getSum());
// console.log(cartÜbung.checkOut());
//----------------------------------------Einprägung-----------------
console.clear();
class Autos {
    constructor(motor, carColor, carId) {
        this.motor = motor;
        this.carColor = carColor;
        this.carId = carId;
        this.motor = `${this.motor} from ${new Date().getTime()}`;
    }
}
class Fabrik {
    constructor() {
        this.products = [];
    }
    addCars(car) {
        this.products.push(car);
    }
}
const result = new Fabrik();
result.addCars(new Autos('gas', 'white', 1));
result.addCars(new Autos('benzin', 'orange', 2));
result.addCars(new Autos('disel', 'black', 3));
result.addCars(new Autos('elektro', 'blue', 4));
// console.log(result);
for (let i = 0; i <= result.products.length; i++) {
    // console.log(result.products[i]);
}
//-----------------------046-----------------Statische Eigenschaften-----------------
console.clear();
class UserServiceStat {
    static getUser(id) {
        console.log(this.db.findById(id));
        return this.db.findById(id);
    }
}
;
UserServiceStat.getUser(1);
// UserServiceStat.db
