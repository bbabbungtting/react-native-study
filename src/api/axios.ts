import axios from 'axios';
import {Platform} from 'react-native';

// emulator
// export const baseUrls = {
//   android: 'http://10.0.2.2:3030',
//   ios: 'http://localhost:3030',
// };

// device (둘 다 사용 가능)
export const baseUrls = {
  android: 'http://10.0.20.144:3030',
  ios: 'http://10.0.20.144:3030',
};

const axiosInstance = axios.create({
  baseURL: Platform.OS === 'android' ? baseUrls.android : baseUrls.ios,
});

export default axiosInstance;
