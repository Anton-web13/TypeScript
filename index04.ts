//-----------------------020-----------------Union-----------------
let arrUnion = ['xdfgdgdfg', true, 1];

const logId = (id: string | number | boolean) => {
    // console.log(arrUnion);

    // for (let i = 0; i < arrUnion.length; i++) {
    //     console.log(arrUnion[i].toUpperCase())
    // }

    if(typeof id === 'string') {
        console.log(id.toUpperCase());
    } else if (typeof id === 'number') {
        console.log(id);
    } else {
        console.log(id);
    }
};

// logId(arrUnion[0]);
// logId(arrUnion[1]);
// logId(arrUnion[2]);




const logError = (err: string | string[]) => {
    if(Array.isArray(err)) {
        console.log(err);
    } else {
        console.log(err);
    }
};


const logObject = (obj: {a: number} | {b: number}) => {
    if ('a' in obj) {
        console.log(obj.a);
    } else {
        console.log(obj.b);
    }
};


// let a: 1 = 1; a ist für immer 1.

const logMultipleIds = (a: string | number, b: string | boolean) => {
    if (a === b) {
        console.log(a, b);
    } else {
        console.log(b);
    }
};


// logMultipleIds('5454', true);



//-----------------------021-----------------Literal Types-----------------


// enum RequestType {
//     GET = 'get',
//     POST = 'post',
// };


// const fetchWithAuth = (url: string, method: 'post' | 'get'): 1 | -1 => {
//     return 1;
// };

// fetchWithAuth('s', 'post');
// fetchWithAuth('s', 'get');

// // let method = 'post';
// let method = 'fyhftyu';
// // const method = 'post';

// fetchWithAuth('s', method as 'post');


//-----------------------022-----------------Type Aliases-----------------

type httpMethod = 'post' | 'get';

const fetchWithAuth = (url: string, method: httpMethod): 1 | -1 => {
    return 1;
};


// let userAliases: {
//     name: string,
//     age: number,
//     skills: string[],
// } = {
//     name: 'asd',
//     age: 23,
//     skills: ['1', '2'],
// };

type UserAliases = {
    name: string,
    age: number,
    skills: string[],
};

type Role = {
    name: string,
    id: number,
};


let userAliases: UserAliases = {
    name: 'asd',
    age: 23,
    skills: ['1', '2'],
};

// type UserWithRole = UserAliases & Role;
type UserWithRole = {
    user: UserAliases,
    role: Role,
};

// let userWithRole: UserWithRole = {
//     id: 1,
//     name: 'asd',
//     age: 23,
//     skills: ['1', '2'],
// };


let userWithRole: UserWithRole = {
    user: {
        name: 'asd',
        age: 23,
        skills: ['1', '2'],
    },
    role: {
        name: 'sfgdfg',
        id: 1,
    }
};

// console.log(userWithRole);

//-----------------------023-----------------Interfaces-----------------

interface UserAliasesInterfaces {
    name: string,
    age: number,
    skills: string[],

    log: (id: number) => string;
};

type UserAliasesInterfaces2 = {
    name: string,
    age: number,
    skills: string[],

    log: (id: number) => string;
};

// interface UserWithRoleInterface extends UserAliasesInterfaces {
//     roleId: number,
// }

interface RoleInterfaces {
    roleId: number,
};

interface UserWithRoleInterface extends UserAliasesInterfaces, RoleInterfaces {
    createbAt: Date;
}

let userAliasesInterfaces: UserWithRoleInterface = {
    name: 'asd',
    age: 23,
    skills: ['1', '2'],
    roleId: 1,
    createbAt: new Date(),

    log(id) {
        return '';
    }
};



// {
//     1: userAliasesInterfaces,
//     2: userAliasesInterfaces,
// }

interface UserDic {
    [index: number]: UserAliasesInterfaces
};

type UserDic2 = {
    [index: number]: UserAliasesInterfaces
};

type ud = Record<number, UserAliasesInterfaces>;



//-----------------------024-----------------Types und Interfaces-----------------

// interface UserName {
//     name: string,
// };

// interface UserName {
//     age: number,
// };

// type ID = string | number;



//-----------------------025-----------------Optional-----------------

interface UserName {
    login: string,
    password?: string,
};

// type UserName {
//     login: string,
//     password?: string,
// };

const userName: UserName = {
    login: 'ldkfhbg',
    password: '1',
};


// const multiply = (first: number, second: number = 5): number => {
const multiply = (first: number, second?: number): number => {
    // return first * second;
    if (!second) {
        return first * first;
    }

    return first * second;
};

interface UserPro {
    login: string,
    password?: {
        type: 'primary' | 'secondary',
    };
};

const testPass = (user: UserPro) => {
    // const t = user.password!.type;
    const t = user.password?.type;
};

const test = (param?: string) => {
    const t = param ?? multiply(5); // oder param oder multiply(5)
};



//-----------------------026-----------------typing of server-----------------

interface IPayment {
    sum: number,
    from: number,
    to: number,
};

enum PaymentStatus {
    Success = 'success',
    Failed = 'failed',
}

interface IPaymentRequest extends IPayment {};

//////////////////////////////////
interface IDataSuccess extends IPayment {
    databaseId: number,
};

interface IDataFailed {
    errorMessage: string,
    errorCode: number,
};
//////////////////////////////////

// interface IResponse {
//     status: PaymentStatus,
//     data: IDataSuccess | IDataFailed
// };

interface IResponseSuccess{
    status: PaymentStatus.Success,
    data: IDataSuccess,
};

interface IResponseFailed{
    status: PaymentStatus.Failed,
    data: IDataFailed,
};


// const get = (): IResponseSuccess | IResponseFailed => {
//     console.log();
// }

//-----------------------027-----------------Void-----------------

const logVoid = (id: string | number): void => {
    console.log(id);
}

const aVoid = logVoid(1);


// const multiplyVoid = (f: number, s?: number): number | void => {
//     if (!s) {
//         return f * f;
//     }

//     // return f * s;
// };

const multiplyVoid = (f: number, s?: number) => {
    if (!s) {
        return f * f;
    }
};

type voidFunction = () => void;

const f1: voidFunction = () => {

}

const f2: voidFunction = () => {
    return true;
};

const b = f2(); // wie bekommen void und mit dem Ergebnis können wir nix machen.

const voidSkills = ['Dev', 'Devops'];

const userVoid = {
    s: ['s'],
};

voidSkills.forEach((skill) => userVoid.s.push(skill));



//-----------------------028-----------------Unknown-----------------

console.clear();

let inputUnknown: unknown;

inputUnknown = 3;
inputUnknown = ['asd', 'sfdszdfg'];

// let resUnknown: string = inputUnknown; // Fehler
let resUnknown: any = inputUnknown;

const run = (input: unknown) => {
    if (typeof input == 'number') {
        input++;
    } else {
        input;
    }
};

const getData = async () => {
    try {
        await fetch('');
    } catch(e) {
        if (e instanceof Error) {   // dies immer zu benutzen
            console.log(e.message);
        }
    }
};

// const getDataForce = async () => {
//     try {
//         await fetch('');
//     } catch(err) {
        // const e = err as Error;    // dies nicht benutzen
//         // console.log(e);
//     }
// };

// getData();

type U1 = unknown | null;  // immer UNKNOWN, egal was danach steht. Es wird der BREITE Begriff genommen
type I1 = unknown & string;  // hier STRING, es wird der ENGE Begriff genommen




// console.log(run(inputUnknown));


//-----------------------029-----------------Never-----------------
// console.clear();


// const genereateError = (message: string) => {     // so ist "never"
//     throw new Error(message);
// };

// function genereate(message: string) {     // so ist "void"
//     throw new Error(message);
// }



function genereate(message: string): never {
    throw new Error(message);
}

// const dumError = () => {     // so ist "never"
//     while(true);

// }

// function dumError() {     // so ist "void"
//     while(true);
// }

function dumError(): never {
    while(true);
}

function rec() {     // so ist "never"
    return rec();
};

// const aNEver: never = 1;    // ist es Fehler.

type payumentAction = 'refund' | 'checkout' | 'reject';

// function proccessAction(action: payumentAction) {
//     switch (action) {
//         case 'refund':
//             // ...
//             break;
//         case 'checkout':
//             // ...
//             break;
//         case 'reject':
//             // ...
//             break;
//         default:
//             const _: never = action;
//             throw new Error('Es gibt solchen Action nicht.'); 
//     }
// };

const proccessAction = (action: payumentAction) => {
    switch (action) {
        case 'refund':
            // ...
            break;
        case 'checkout':
            // ...
            break;
        case 'reject':
            // ...
            break;
        default:
            const _: never = action;
            throw new Error('Es gibt solchen Action nicht.'); 
    }
};


const isString = (x: string | number): boolean => {
    if(typeof x == 'string') {
        return true;
    } else if (typeof x == 'number') {
        return false;
    }

    // return false;

    genereate('aertsert');
};


console.log(isString('true'));
























