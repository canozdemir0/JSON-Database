let database = {
    users: []
};

function addUser(name, age) {
    const user = {
        id: database.users.length + 1,
        name: name,
        age: age
    };
    database.users.push(user);
    console.log(`Kullanıcı eklendi: ${JSON.stringify(user)}`);
}

function listUsers() {
    console.log("Kullanıcılar:");
    database.users.forEach(user => {
        console.log(`ID: ${user.id}, İsim: ${user.name}, Yaş: ${user.age}`);
    });
}

function deleteUser(id) {
    const index = database.users.findIndex(user => user.id === id);
    if (index !== -1) {
        const removedUser = database.users.splice(index, 1);
        console.log(`Kullanıcı silindi: ${JSON.stringify(removedUser[0])}`);
    } else {
        console.log("Kullanıcı bulunamadı!");
    }
}

addUser("Oğuz", 25);
addUser("Can", 30);
listUsers();
deleteUser(1);
listUsers();