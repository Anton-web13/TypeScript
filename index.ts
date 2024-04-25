interface user {
    name: string,
}
//////////////////////////////////////////////////////
const firstInterface = (user: user) => {
    console.log(user);
};

// firstInterface({ name: 'Anton'}); 
//////////////////////////////////////////////////////
const first = (user: string) => {
    console.log(user);
};

// first('Anton');
//////////////////////////////////////////////////////


let revenue: number = 1000;
let bonus: number = 500;

let res: number = revenue + bonus;

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


//-------------------------012----------------------------


function getFullNameBoolean(user: {firstname: string, surname: string}): string {
    return `${user.firstname} ${user.surname}`;
};

const user = {
    firstname: 'Anton',
    surname: 'Menschlich',
    city: 'Minsk',
    age: 33,
    skills: {
        dev: true,
        devops: true,
    }
};
// 
console.log(getFullNameBoolean(user));



//-------------------------013----------------------------



let info: {
    officeId: number,
    isOpened: boolean,
    contacts: {
        phone: string,
        email: string,
        address: {
            city: string,
        },
    }
} = {
	"officeId": 45,
	"isOpened": false,
	"contacts": {
		"phone": "+79100000000",
		"email": "my@email.ru",
		"address": {
			"city": "Москва"
		}
	}
}




//-------------------------014----------------------------


// const skills: string[] = ['dev', 'devops', 1];
const skills: string[] = ['Dev', 'Devops', 'Testing'];

for(const skill of skills) {
    // console.log(skill);
};

// console.log(
skills
    .filter((skill: string) => skill !== 'Devops')
    .map((skill: string) => {return 1})
    .reduce((first, second) => first + second)
// );



//-------------------------015------Tuple----------------------


const skillTuples: [number, string] = [1, 'Devops'];
// const id = skillTuples[0];
// const skillName = skillTuples[1];
const [id, skillname] = skillTuples;

const arr: [number, string, ...boolean[]] = [1, 'Devops', true, false];


//-------------------------016------Readonly----------------------


const skillReadonly: readonly [number, string] = [1, 'Devops'];
const skilsRead: readonly string[] = ['1', 'Devops'];
const skilsReadJN: Array<string> = ['1', 'Devops'];
const skilsReadJNRead: ReadonlyArray<string> = ['1', 'Devops'];

//-------------------------017------Enums----------------------


// const resEnums = {
//     message: 'Die Beyzahlunf ist erfolgreich',
//     statusCode: 1,
// };

// enum StatusCode {
//     SUCCESS = 1,
//     IN_PROCESS,
//     FAILED,
// };

// // 1 - Erfolg
// // 2 - in Progress
// // 3 - anbgelehnt


enum StatusCode {
    SUCCESS = 's',
    IN_PROCESS = 'p',
    FAILED = 'f',
};

// 's' - Erfolg
// 'p' - in Progress
// 'f' - anbgelehnt

const resEnums = {
    message: 'Die Beyzahlunf ist erfolgreich',
    statusCode: StatusCode.SUCCESS,
};

if (resEnums.statusCode === StatusCode.SUCCESS) {

};


function action(status: StatusCode) {
    // console.log(status);
};

action(StatusCode.IN_PROCESS)


const compute = () => {
    return 3;
};


enum Roles {
    ADMIN,
    USER = compute(),
};


// function test(x: {ADMIN: number}) {

// };

// test(Roles);


const enum RolesConst {
    ADMIN = 1,
    USER = 2,
};

const res2 = Roles.ADMIN;


