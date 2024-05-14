//-----------------------035-----------------Create of class-----------------
console.clear();

class User {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

const userClass = new User('Anton');
console.log(userClass);
userClass.name = 'Petr';
console.log(userClass);


////////////////////////////////////////////////////////////

class AdminTrue {              // "strictPropertyInitialization": true,  
    role: number;

    constructor(role: number) {
        this.role = role;
    }
}

const adminTrue = new AdminTrue(2);
adminTrue.role = 1;
console.log(adminTrue);
////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////

class AdminFalse {              // "strictPropertyInitialization": false,  
    role: number;
}

const adminFalse = new AdminFalse();
adminFalse.role = 1;
console.log(adminFalse);

////////////////////////////////////////////////////////////


//-----------------------036-----------------Constructor-----------------
console.clear();


class UserConstructor {     // Schritt 3
    nameeeeee: string;
    age: number;

    constructor();
    constructor(name: string);
    constructor(age: number);
    constructor(name: string, age: number);
    constructor(ageOrName?: string | number, age?: number) {     // Schritt 2, constructor of implementation
        if (typeof ageOrName === 'string') {
            this.nameeeeee = ageOrName;
        } else if (typeof ageOrName === 'number') {
            this.age = ageOrName;
        }

        if (typeof age === 'number') {
            this.age = age;
        } 
    }
}

const userConstructor = new UserConstructor('Anton');     // Schritt 1
const userConstructor2 = new UserConstructor();
const userConstructor3 = new UserConstructor(33);
const userConstructor4 = new UserConstructor('Anton', 34);



//-----------------------037-----------------Method-----------------
console.clear();

enum PaymentStatusMethod {
    Holded,
    Processed,
    Reversed,
};

class PaymentMethod {
    id: number;                      // Eigenschaften des Classes
    status: PaymentStatusMethod;     // --- // ---
    createdAt: Date;                 // --- // ---
    updatesAt: Date;                 // --- // ---

    constructor(id: number) {
        this.createdAt = new Date();
        this.id = id;
        this.status = PaymentStatusMethod.Holded;
    };

    getPaymenyLifeTime(): number {   // Method des Classes
        return new Date().getTime() - this.createdAt.getTime(); // this take from constructor
    }

    unholdPayment(): void {
        if (this.status == PaymentStatusMethod.Processed) {
            throw new Error('Die Zahlung kann nicht zurückgegeben werden!');
        }

        this.status = PaymentStatusMethod.Reversed;
        this.updatesAt = new Date();
    }
};

const payment = new PaymentMethod(1);
const time = payment.getPaymenyLifeTime();
payment.unholdPayment();

console.log(payment);
console.log(time);























































 