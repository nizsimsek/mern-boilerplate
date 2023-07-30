const BaseModel = require('./BaseModel');

class UserModel extends BaseModel {
  constructor() {
    super('users');
  }

  async findByEmail(email) {
    const data = await this.findBy('email', email);
    return data;
  }
}

module.exports = new UserModel();