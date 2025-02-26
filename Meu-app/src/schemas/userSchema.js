const { z } = require('zod');

const userSchema = z.object({
  email: z.string().email(),
  nome: z.string().min(2),
  senha: z.string().min(6),
});

module.exports = userSchema;
