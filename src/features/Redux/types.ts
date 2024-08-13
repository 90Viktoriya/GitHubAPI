import { store } from './store';

//типизация стандартных Root state и дистпетчера
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
