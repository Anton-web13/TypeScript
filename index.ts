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

console.log(res);