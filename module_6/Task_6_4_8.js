const name = "Alex";
const age = 28;

const user = {
    name,
    age
}

for (let key in user) {
    console .log(user[key]);
}