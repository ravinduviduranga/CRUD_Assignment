import instance from './AxiosInstance';
//import constants from '.Constants';

const StoreData = async (payload) => {
  
  try {
    
    const res = await instance.post('/products', {...payload}, {
      timeout: 2000,
    });
    return Promise.resolve(res);
  } catch (e) {
    return Promise.reject(e);
  }
};

export {sendSMS};