interface user {
    name: string,
}

const first = (user: user) => {
    console.log(user.name);
};


first({ name: 'Anton'}); 