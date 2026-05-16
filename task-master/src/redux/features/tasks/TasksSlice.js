import { createSlice, createSelector } from '@reduxjs/toolkit';

const initialState = {
    tasks: [
        {
            id: 1,
            status: 'pending',
            title: 'Test Task',
            description: 'We need a remove button in our task card. Meke the button red and use Heroicon for tashbin icon.',
            date: '2023-08-28',
            assignTo: 'Mir Hussain',
            priority: 'high',
        }
    ],
};

const tasksSlice = createSlice({
    name: 'tasksSlice',
    initialState,
    reducers: {
        addTask: (state, { payload }) => {
            const currentTasks = state.tasks;
            state.tasks.push({
                id: currentTasks.length + 1,
                status: 'pending',
                ...payload,
            });
        },
        removeTask: (state, { payload }) => {
            state.tasks = state.tasks.filter(task => task.id !== payload);
        },
        updateStatus: (state, { payload }) => {
            state.tasks = state.tasks.map(task => {
                if (task.id === payload.id) {
                    return {
                        ...task,
                        ...payload,
                    };
                }
                return task;
            });
        }
    },
});

export const { addTask, removeTask, updateStatus } = tasksSlice.actions;

export const selectMyTasks = createSelector(
    (state) => state.tasksSlice.tasks,
    (state) => state.userSlice.user,
    (tasks, user) => tasks.filter(task => task.assignTo === user?.name)
);

export default tasksSlice.reducer;