/* 还未引入@react-native-community/async-storage */
// import AsyncStorageStatic from '@react-native-community/async-storage';      //导入本地存储库

// var userInfoLocalObject; //定义一个单例对象
// const storageKey = '@userInfo'; //查询本地存储用户信息的key

// export default class UserInfoLocalStorage {
//   //静态的创建方法
//   static shareInstance() {
//     if (userInfoLocalObject === undefined) {
//       userInfoLocalObject = {};
//     }

//     return userInfoLocalObject;
//   }

//   /**
//    * @param userLoginInfoMode 用户登录后存储到本地的信息
//    * */

//   //保存用户信息到本地
//   static saveUserInfoToLocal(userLoginInfoMode, result) {
//     global.userLoginInfo = userLoginInfoMode;
//     let loginInfoStringValue = JSON.stringify(userLoginInfoMode); //将存储的对象序列化成字符串存储到本地

//     AsyncStorageStatic.setItem(storageKey, loginInfoStringValue, error => {
//       if (!error) {
//         //存储到本地成功
//         result(true);
//       } else {
//         result(false);
//       }
//     });
//   }

//   /**
//    * @param key 要查询的key值
//    * @param response 返回查询的结果
//    * @param code = '200' 表示查询成功,返回查询的数据
//    * @param code = '201' 表示查询失败,
//    * */

//   static queryLocalStorageUserInfo(response) {
//     AsyncStorageStatic.getItem(storageKey, (error, result) => {
//       if (!error) {
//         if (result !== '' && result !== null) {
//           let loginInfo = JSON.parse(result);
//           response({ code: '200', data: loginInfo });
//         } else {
//           response({ code: '201', data: null });
//         }
//       } else {
//         response({ code: '201', data: null });
//       }
//     });
//   }

//   /**
//    * @param loginUserInfo 要更新的本地数据
//    *
//    */

//   static updateLocalStorageUserInfo(loginUserInfo, result) {
//     let userLoginInfo = loginUserInfo;
//     let loginStringValue = JSON.stringify(userLoginInfo);

//     AsyncStorageStatic.setItem(storageKey, loginStringValue, error => {
//       if (!error) {
//         result(true);
//       } else {
//         result(false);
//       }
//     });
//   }

//   /**
//    * 清除本地的缓存
//    * */

//   static removeLocalUserInfo(result) {
//     AsyncStorageStatic.removeItem(storageKey, error => {
//       if (!error) {
//         global.encrypIvtKey = '';
//         //清空global的数据
//         global.userLoginInfo = {
//           userId: '',
//           userName: '',
//           userMoney: '',
//           headPortrait: '',
//           vipLevel: '',
//           realName: null,
//           bankPassword: '',
//           bankName: '',
//           bankNumber: '',
//           currentDml: '',
//           chukDml: '',
//           isReceive: '',
//           threeReceive: '',
//           dayNum: ''
//         };

//         result(true);
//       } else {
//         result(false);
//       }
//     });
//   }
// }
