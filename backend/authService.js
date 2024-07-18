const users = [];

const authService = {
  register(email, password) {
    if (users.find((user) => user.email === email)) {
      return { error: 'User already exists' };
    }
    const newUser = { id: users.length + 1, email, password };
    users.push(newUser);
    return { message: 'User registered successfully' };
  },

  login(email, password) {
    const user = users.find((user) => user.email === email && user.password === password);
    if (!user) {
      return { error: 'Invalid email or password' };
    }
    const token = 'fake-token'; 
    return { token };
  },
};


export default authService;
