import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

const users = []


router.get('/',(req,res)=>{
    console.log()
    res.send(users);
})

router.post('/', (req,res) => {
    const user = req.body

    users.push({id:uuidv4(),...user})

    res.send(`User with name ${user.firstname} added to database`);
});
export default router;
