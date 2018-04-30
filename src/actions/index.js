import * as types from './types';


export const doSomething = action =>{
    return {
        type: types.TYPE,
        payload: {data: action}
    }
}