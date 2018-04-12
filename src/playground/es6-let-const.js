var nameVar = 'Andrew';
nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'Callie';
nameLet = 'Diva';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);


function getPetName() {
    let petName = 'Scooter';
    return petName;
}

const petName = getPetName();
console.log(petName);


//Block Scoping

const fullName = 'Justin Laureano';
let firstName;

if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);