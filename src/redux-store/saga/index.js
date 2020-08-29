import {takeEvery, call,put} from 'redux-saga/effects';
import {sendSMS} from '../../api/ApiClient';
import {SEND_DETAILS} from '../action-types/types';

//watcher saga
export function* watchSendDetails(){
    yield takeEvery(SEND_DETAILS,SendDetails)
}
//worker saga
export function* SendDetails(payload){
    const {info} = payload;
    //console.log(payload);
    const total = yield call(sendSMS,{...info});
    //console.log(total);
    yield put({
        type: SEND_DETAILS,
        payload: total
    });
}