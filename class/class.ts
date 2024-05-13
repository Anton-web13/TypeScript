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





























































 