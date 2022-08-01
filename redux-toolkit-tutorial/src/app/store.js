import { configureStore } from '@reduxjs/toolkit';

// Reducer 추가
import counterReducer from '../features/counter/counterSlice'

export const store = configureStore({
    reducer : {
        // To store..
        // 이 slice reducer 사용해서 state update해.. 
        counter: counterReducer,
    },
})

// Create a Redux Store 
// 자동으로 Redux DevTools Extension을 환경설정해줌 
