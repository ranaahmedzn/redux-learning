import { configureStore } from '@reduxjs/toolkit';
import tasksSlice from './features/tasks/TasksSlice';

const store = configureStore({
  reducer: {
    tasksSlice: tasksSlice,
  },
});

export default store;
