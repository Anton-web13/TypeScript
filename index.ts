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
