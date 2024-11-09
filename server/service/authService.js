import userDao from '../dao/userDao'; 
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";

const login = async (req, res) => {
    const {username, password} = req.body;
    const user = await userDao.findUser({username});

    if(!user){
        return res.status(400).send("Senha ou usuário inválido");
    }

    const validPassword = await bcrypt.compare(password, user.password)
    if(!validPassword){
        return res.status(400).send("Senha ou usuário inválido");
    }

    const token = jwt.sign({userId: user.id}, process.env.JWT_SECRET)
    res.send({token})
}

const register = async (req, res) => {
    try{
        const {username, password} = req.body;
        const existingUser = await userDao.findUser({username});

        if(existingUser){
            return res.status(400).json({error: "Usuário já existe"})
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const idUser = await userDao.insert({username},hashedPassword)

        res.json({
            message: "Usuário registrado",
            userId: savedUser._id
        })
    }catch(error){
        console.error(error);
        res.status(500).json({error: "Internal server error"})
    }
}
export default {login, register}
 