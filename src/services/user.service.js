const { users } = require("../data/users");

class UserService {
  getAllUsers() {
    return users;
  }

  createUser(data) {
    const newUser = {
      id: users.length + 1,
      name: data.name,
      email: data.email
    };
    users.push(newUser);
    return newUser;
  }

  getUserById(id) {
    return users.find((u) => u.id === id);
  }
}

module.exports = new UserService();
