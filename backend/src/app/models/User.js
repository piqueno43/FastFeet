import Sequelize, { Model } from 'sequelize';
import bcript from 'bcryptjs';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password_hash: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
      },
      {
        sequelize,
      }
    );
    return this;
  }

  checkPassword(password) {
    return bcript.compare(password, this.password_hash);
  }
}

export default User;
