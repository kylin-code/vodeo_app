import UserInfo from './UserInfo';

/**
 * 根store
 * @class RootStore
 * CartStore 为购物车页面的数据
 * UserInfo 为用户数据
 */
class RootStore {
  constructor() {
    this.UserInfo = new UserInfo(this);
  }
}

// 返回RootStore实例
export default new RootStore();
