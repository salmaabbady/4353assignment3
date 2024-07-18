const users = [];

const userService = {
  getUsers() {
    return users;
  },

  addUser(user) {
    user.id = users.length + 1;
    users.push(user);
    return user;
  },
};

export default userService;
