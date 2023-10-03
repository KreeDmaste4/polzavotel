let users = {}
for (let i = 1; i <= 10;i++) {
    let name = prompt('Введите имя');
    let age = +prompt('Введите возраст');
    
    users[i] = {
        name: name,
        age: age
    }
    console.log(`Пользователь ${i}`);
    console.log(`Имя ${users[i].name}`);
    console.log(`Возраст ${users[i].age}`);
}

console.log(users);