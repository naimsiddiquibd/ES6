const studentDetails = {id: 21135694, name: 'Naim SIddiqui', age: 20, phone: 'Redmi'};
// console.log(studentDetails.phone);
// const id = studentDetails.id;
// console.log(id);

const {id, name, age, phone} = studentDetails;
console.log(age);

const webDorks = {
    type: 'software',
    founded: 2020,
    ceo: {
        hisName: 'Alex',
        hisAge: 28,
        location: 'Singapore'
    },
    services:{
        web: {
            frontEnd: 'react',
            backend: 'expressJS',
        },
        app: 'react native',
    },
}

const {hisName, hisAge, location} = webDorks.ceo;
console.log(location);