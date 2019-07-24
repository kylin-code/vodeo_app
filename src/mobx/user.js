import { observable, action } from 'mobx';
// 订单store
export default class User {
  @observable userMoney = 0;

  @action
  addNum() {
    this.userMoney += 2;
  }
}
