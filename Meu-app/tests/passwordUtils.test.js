const { hashPassword, comparePassword } = require('../src/utils/passwordUtils');

describe('Password Utils', () => {
  it('deve encriptar a senha', async () => {
    const password = 'senha123';
    const hashedPassword = await hashPassword(password);
    expect(hashedPassword).not.toBe(password);
    expect(hashedPassword).toMatch(/^\$2[ayb]\$.{56}$/); 
  });

  it('deve comparar a senha corretamente', async () => {
    const password = 'senha123';
    const hashedPassword = await hashPassword(password);
    const isMatch = await comparePassword(password, hashedPassword);
    expect(isMatch).toBe(true);
  });

  it('deve falhar ao comparar uma senha incorreta', async () => {
    const password = 'senha123';
    const wrongPassword = 'senhaErrada';
    const hashedPassword = await hashPassword(password);
    const isMatch = await comparePassword(wrongPassword, hashedPassword);
    expect(isMatch).toBe(false);
  });
});
