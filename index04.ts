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


logMultipleIds('5454', true);



//-----------------------021-----------------Literal Types-----------------


// enum RequestType {
//     GET = 'get',
//     POST = 'post',
// };


const fetchWithAuth = (url: string, method: 'post' | 'get'): 1 | -1 => {
    return 1;
};

fetchWithAuth('s', 'post');
fetchWithAuth('s', 'get');

// let method = 'post';
let method = 'fyhftyu';
// const method = 'post';

fetchWithAuth('s', method as 'post');





















