import User from './user';

/**
 * @class Store
 * User 为用户数据
 */
class Store {
  constructor() {
    this.User = new User(this);
  }
}

// 返回RootStore实例
export default new Store();
