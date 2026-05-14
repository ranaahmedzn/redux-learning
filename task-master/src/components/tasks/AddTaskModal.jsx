import { useForm } from 'react-hook-form';
import Modal from '../ui/Modal';

const AddTaskModal = ({ isOpen, setIsOpen }) => {
  const { register, handleSubmit, reset } = useForm();

  const onCancel = () => {
    reset();
    setIsOpen(false);
  };

  const onSubmit = (data) => {
    console.log(data);
    onCancel();
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Add Task">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col mb-5">
          <label htmlFor="title" className="mb-2">Title</label>
          <input
            className="w-full rounded-md border-gray-300"
            type="text"
            id="title"
            {...register('title')}
          />
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="description" className="mb-2">Description</label>
          <textarea
            className="w-full rounded-md border-gray-300"
            id="description"
            {...register('description')}
          ></textarea>
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="deadline" className="mb-2">Deadline</label>
          <input
            className="w-full rounded-md border-gray-300"
            type="date"
            id="deadline"
            {...register('deadline')}
          />
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="assignTo" className="mb-2">Assign to</label>
          <select
            className="w-full rounded-md border-gray-300"
            id="assignTo"
            {...register('assignTo')}
          >
            <option value="Mir Hussain">Mir Hussain</option>
            <option value="Mezba Abedin">Mezba Abedin</option>
            <option value="Nahid Hasan">Nahid Hasan</option>
            <option value="Mizanur Rahman">Mizanur Rahman</option>
            <option value="Tanmoy Parvez">Tanmoy Parvez</option>
            <option value="Fahim Ahammed Firoz">Fahim Ahammed Firoz</option>
            <option value="Rahatul Islam">Rahatul Islam</option>
            <option value="Samin Israr Ravi">Samin Israr Ravi</option>
            <option value="Mehedi Hasan">Mehedi Hasan</option>
            <option value="MD Taha">MD Taha</option>
            <option value="Sabbir Hossain">Sabbir Hossain</option>
          </select>
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="priority" className="mb-2">Priority</label>
          <select
            className="w-full rounded-md border-gray-300"
            id="priority"
            {...register('priority')}
          >
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>
        <div className="flex gap-3 justify-end">
          <button onClick={onCancel} type="button" className="btn btn-danger">
            Cancel
          </button>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default AddTaskModal;
