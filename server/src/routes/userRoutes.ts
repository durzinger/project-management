import { Router } from 'express';
import { getUsers } from '../controllers/userController';
import { postUser } from '../controllers/userController';
import { getUser } from '../controllers/userController';

const router = Router();

router.get("/", getUsers);
router.post("/", postUser)
router.get("/:cognitoId", getUser)

export default router;