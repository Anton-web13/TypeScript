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

console.log(getFullNameBoolean(user));


