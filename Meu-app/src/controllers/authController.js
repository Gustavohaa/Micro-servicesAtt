const bcrypt = require('bcrypt');
const { User } = require('../../models')
const userSchema = require('../schemas/userSchema');

async function signup(req, res) {
  try {
    
    const validatedData = userSchema.parse(req.body);

   
    const hashedPassword = await bcrypt.hash(validatedData.senha, 10);

    
    const user = await User.create({
      email: validatedData.email,
      nome: validatedData.nome,
      senha: hashedPassword,
    });

    res.status(201).json({ message: 'Usuário criado com sucesso!', userId: user.id });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = { signup };