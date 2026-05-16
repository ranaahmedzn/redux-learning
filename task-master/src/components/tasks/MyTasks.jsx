import {
  CheckIcon,
  DocumentMagnifyingGlassIcon,
} from '@heroicons/react/24/outline';
import { useDispatch, useSelector } from 'react-redux';
import { updateStatus, selectMyTasks } from '../../redux/features/tasks/TasksSlice';
import { useEffect, useState } from 'react';
import Modal from '../ui/Modal';

const MyTasks = () => {
  const { tasks } = useSelector(state => state.tasksSlice);
  const myTasks = useSelector(selectMyTasks);
  const dispatch = useDispatch()
  const [openedTaskId, setOpenedTaskId] = useState(null);

  const [taskDetails, setTaskDetails] = useState({});

  useEffect(() => {
    if (openedTaskId) {
      setTaskDetails(tasks.find(task => task.id === openedTaskId) || {});
    }
  }, [openedTaskId, tasks])

  return (
    <div>
      <h1 className="text-xl my-3">My Tasks</h1>
      <div className="h-[750px] overflow-auto space-y-3">
        {myTasks.map(task => (
          <div
            key={task.id}
            className="bg-secondary/10 rounded-md p-3 flex justify-between"
          >
            <h1>{task.title}</h1>
            <div className="flex gap-3">
              <button onClick={() => setOpenedTaskId(task.id)} className="grid place-content-center" title="Details">
                <DocumentMagnifyingGlassIcon className="w-5 h-5 text-primary" />
              </button>
              <button onClick={() => dispatch(updateStatus({ id: task.id, status: 'completed' }))} className="grid place-content-center" title="Done">
                <CheckIcon className="w-5 h-5 text-primary" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* task details modal */}
      <Modal isOpen={openedTaskId !== null} setIsOpen={() => setOpenedTaskId(null)} title={taskDetails.title}>
        <p>{taskDetails.description}</p>
        <p className="my-3 text-sm">Assign To: {taskDetails.assignTo}</p>
        <div className='flex justify-between items-center'>
          <p>Status: {taskDetails.status}</p>
          <p>{taskDetails.date}</p>
        </div>
      </Modal>
    </div>
  );
};

export default MyTasks;
