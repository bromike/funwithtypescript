import { Router, Request, Response } from 'express';
import {isUserWithoutId, User} from "../models/user";
import {getUserById, getAllUsers, createUser} from "../repositories/userRepository";

const router = Router();

router.get('/', async (req: Request, res: Response) => {
    const user : User[] = await getAllUsers();
    if (user) {
        res.json(user);
    } else {
        res.status(404).send('User not found');
    }
});

router.get('/:id', async (req: Request, res: Response) => {
    const id : number = parseInt(req.params.id);
    const user : User = await getUserById(id);
    if (user) {
        res.json(user);
    } else {
        res.status(404).send('User not found');
    }
});

router.post('/', async (req: Request, res: Response) => {
    const newUser: User = req.body;
    if (!isUserWithoutId(newUser)) {
        res.status(400).send('Payload must match the user format');
        return;
    }

    const createdUser: User = await createUser(newUser);
    res.status(201).json(createdUser);
});

export default router;