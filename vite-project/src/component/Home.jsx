
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
export default function TodoList() {
  const [taskInput, setTaskInput] = useState('');
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(null);





  const addTask = () => {
    if (editIndex !== null) {
      // Update task if in edit mode
      const updatedTasks = [...tasks];
      updatedTasks[editIndex] = taskInput;
      setTasks(updatedTasks);
      setEditIndex(null);
    } else if (taskInput.trim() !== '') {
      // Add new task
      setTasks((prevTasks) => [...prevTasks, taskInput]);
    }
    setTaskInput('');
  };

  const clearText = () => {
    setTasks([]);
  };

  const editTask = (index) => {
    setEditIndex(index);
    setTaskInput(tasks[index]);
  };

  const removelistitem = (index) => {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  };

  return (
    <div className="">
        
        
      

      <form className="max-w-sm mx-auto mt-[8rem] p-4 bg-white shadow-md bg-clip-border rounded-xl w-96">
        <div className="mb-5 mt-7">
          <label
            htmlFor="taskInput"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Enter Your Task
          </label>
          <input
            type="text"
            id="taskInput"
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Here"
            required
          />
        </div>
        <button
          type="button"
          onClick={addTask}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          {editIndex !== null ? 'Update Task' : 'Add Task'}
        </button>
        <button
          type="button"
          onClick={clearText}
          className="text-white ml-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Clear
        </button>

        <table className="w-full">
          <thead>
            <tr>
              <th>Task</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr key={index}>
                <td>{editIndex === index ? (
                  <input
                    type="text"
                    value={taskInput}
                    onChange={(e) => setTaskInput(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                ) : (
                  task
                )}</td>
                <td className='inline-block mb-3 mr-4 p-[9px] px-[10px] rounded-lg bg-black cursor-pointer hover:bg-slate-800'>
                  <svg onClick={() => editTask(index)} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48">
                    <rect width="8" height="41" x="19.621" y="3.879" fill="#3ddab4" transform="rotate(45.001 23.621 24.379)"></rect><rect width="8" height="7" x="34.47" y="6.03" fill="#f5bc00" transform="rotate(45.001 38.47 9.53)"></rect><rect width="3" height="8" x="34.167" y="8.333" fill="#00b569" transform="rotate(-45.001 35.667 12.333)"></rect><polygon fill="#3ddab4" points="4.226,43.774 6.297,36.046 11.954,41.703"></polygon><polygon fill="#00b569" points="7.677,42.849 5.153,40.317 4.226,43.774"></polygon>
                  </svg>
                </td>
                <td className='inline-block mb-3 p-[7px] rounded-lg bg-black cursor-pointer hover:bg-slate-800'>
                  <svg onClick={() => removelistitem(index)} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 48 48">
                    <linearGradient id="nyvBozV7VK1PdF3LtMmOna_pre7LivdxKxJ_gr1" x1="18.405" x2="33.814" y1="10.91" y2="43.484" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#32bdef"></stop><stop offset="1" stop-color="#1ea2e4"></stop></linearGradient><path fill="url(#nyvBozV7VK1PdF3LtMmOna_pre7LivdxKxJ_gr1)" d="M39,10l-2.835,31.181C36.072,42.211,35.208,43,34.174,43H13.826	c-1.034,0-1.898-0.789-1.992-1.819L9,10H39z"></path><path fill="#0176d0" d="M32,7c0-1.105-0.895-2-2-2H18c-1.105,0-2,0.895-2,2c0,0,0,0.634,0,1h16C32,7.634,32,7,32,7z"></path><path fill="#007ad9" d="M7,9.886L7,9.886C7,9.363,7.358,8.912,7.868,8.8C10.173,8.293,16.763,7,24,7s13.827,1.293,16.132,1.8	C40.642,8.912,41,9.363,41,9.886v0C41,10.501,40.501,11,39.886,11H8.114C7.499,11,7,10.501,7,9.886z"></path>
                  </svg>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </form>
      <button type="button" class="text-white bg-gradient-to-r mt-4 from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"> <Link to="/" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Logout</Link></button>
        
    </div>
  );
}
