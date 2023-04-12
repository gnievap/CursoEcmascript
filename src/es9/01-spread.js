
const user = {
    username:'runaway',
    age: 34,
    country:'MX'
};

const {username, ...values} = user;
console.log(username);
console.log(values);