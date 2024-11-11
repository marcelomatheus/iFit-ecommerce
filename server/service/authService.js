import userModel from '../models/UserModel.js';
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
    const { username, password } = req.body;
    
    try {
        const user = await userDao.findUser({ username });

        if (!user) {
            return res.status(400).send("Senha ou usuário inválido");
        }

        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(400).send("Senha ou usuário inválido");
        }

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.send({ token });
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};

export const register = async (req, res) => {
    try {
        const { username, password } = req.body;
        const existingUser = await userDao.findUser({ username });

        if (existingUser) {
            return res.status(400).json({ error: "Usuário já existe" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = await userDao.insert({ username, password: hashedPassword });

        res.json({
            message: "Usuário registrado",
            userId: newUser._id
        });
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};


