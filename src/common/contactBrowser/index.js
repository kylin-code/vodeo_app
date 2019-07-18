import { Linking } from 'react-native';

const contactBrowser = (url, sucFn, failFn) => {
  Linking.canOpenURL(url)
    .then(supported => {
      if (!supported) {
        failFn();
      } else {
        Linking.openURL(url);
        sucFn();
      }
    })
    .catch(err => {
      failFn();
    });
};

export default contactBrowser;
