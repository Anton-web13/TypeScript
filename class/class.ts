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

// console.log(userConstructor3);

//-----------------------037-----------------Method-----------------
// console.clear();

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

// console.log(payment);
// console.log(time);



//-----------------------038-----------------Restart of Methods-----------------
console.clear();

class UserRestart {
    skills: string[];
    // skill: string;

    // constructor(skill: string);
    // constructor(skillsID: string[]) {
    //     this.skills = skillsID;
    // }
    
    addSkill(skill: string): void;
    addSkill(skills: string[]): void;
    addSkill(skillOrSkills: string | string[]) {
        if (typeof skillOrSkills == 'string') {
            this.skills.push(skillOrSkills);
        } else {
            // this.skills.concat(skillOrSkills);
        }
    }
}

// const restart = new UserRestart(['xdgfhhdfh', 'dfghdrth']);
// const restart = new UserRestart('ghukgkgyio');
// const restart = new UserRestart().addSkill(['sdgfsdrg', 'sdrgserg']);
// console.log(restart);


// const runRestart = (distance: number): void
// const runRestart = (distance: string): void
// const runRestart = (distance: number | string): void => {

// }


function runRestart(distance: string[]): string[];
function runRestart(distance: number): number;
function runRestart(distance: number | string[]): number | string[] {
    if (typeof distance === 'number') {
        return 1;
    } else {
        return 0;
    }
}

// console.log(runRestart(['dfgdg', 'sdghdrth']));
// console.log(runRestart(665951951));


class MyClass {
    id: number;

    constructor(id: number) {
        if (typeof id === 'number') {
            this.id = id;
        }
    }
}

// const myConstructortttt = new MyClass(1679867986798);
// console.log(myConstructortttt);


//-----------------------039-----------------Getter und Setter-----------------


class UserGetter {
    _login: string;
    // _password: string;
    password: string;
    createdAt: Date;

    // getLogin(log: string) {
    //     this.login = 'user' + log;
    // }

    set login(log: string | number) {
        this._login = 'user-' + log;
        this.createdAt = new Date();
    }

    get login() {
        return this._login;
    }

    // set password(pas: string) {
    //     // nur SYNC und das ist schlecht, weil wir da den Strom blockieren.
    // }

    async setPassword(pas: string) {
            // async benutzen wir hier.
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

















//-----------------------040-----------------Implements-----------------

// interface ILoggerImplements {
//     log(...args): void;
//     error(...args): void;
// };


// class LoggerImplements implements ILoggerImplements {
//     log(...args: any[]): void {
//         console.log(...args);
//     }

//     // error(...args: any[]): void {
//     //     // hhtp Anfarge
//     //     console.log(...args);
//     // }

//     async error(...args: any[]): Promise<void> {
//         // hhtp Anfarge
//         console.log(...args);
//     }
// }

interface IPayableImplements {
    pay(paymentId: number): void;
    price?: number;
}

interface IDeletableImplements{
    delete(): void;
}

class UserImplements implements IPayableImplements, IDeletableImplements {
    // pay(paymentId: number): void {
    //     ///
    // }

    pay(paymentId: number | string): void {
        ///
    }
    price?: number | undefined;

    delete(): void {
        
    }
};

// new UserImplements().



//-----------------------041-----------------Extends override-----------------

type PaymentExtendsStatus = 'new' | 'paid';

class PaymentExtends {
    id: number;
    status: PaymentExtendsStatus = 'new';

    constructor(id: number) {
        this.id = id;
    };

    pay() {
        this.status = 'paid';
    }
}

class ParsistendExtendsPayment extends PaymentExtends {
    databaseId: number;
    paidAt: Date;

    constructor() {
        const id = Math.random();
        super(id);
    };

    save() {
        //
    };

    override pay(date?: Date) {   // bedeutet, dass diese Methode überschrieben worden ist.
        super.pay();
        this.status = 'paid';
        if (date) {
            this.paidAt = date;
        }
    }
};

// new PaymentExtends().
// new ParsistendExtendsPayment().



//-----------------------042-----------------Besonderheit von Extends-----------------

console.clear();

class UserBesonderheit {
    name: string = 'user';

    constructor() {
        console.log(this.name);
    }
}

class AdminBesonderheit extends UserBesonderheit {
    name: string = 'admin';

    constructor() {
        super();
        console.log(this.name);
    }
};

// new AdminBesonderheit();


// new Error('');
class HttpErrorBesonderheit extends Error {
    code: number;

    constructor(message: string, code?: number) {
        super(message);
        this.code = code ?? 500;
    }
}













































 