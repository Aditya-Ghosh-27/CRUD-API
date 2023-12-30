import express from 'express';

const router = express.Router(); // A router coming from express.Router

const users = [
    {
        firstname: "Aditya",
        lastname: "Ghosh",
        age: 20
    },
    {
        firstname: "Anindo",
        lastname: "Chowdhury",
        age: 19
    },
    {
        firstname: "Sk. Firdous",
        lastname: "Rahaman",
        age: 20
    }
];

router.get('/', (req, res) => {
    console.log(users);
    res.send("Hello");
});

export default router;