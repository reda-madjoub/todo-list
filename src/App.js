import React, {useState} from 'react';
import './design/App.scss';
import ToggleMode from './component/ToggleMode'
import Task from './component/Task'
import { BsFillPlusSquareFill } from 'react-icons/bs';


// import logo from './logo.svg';


export const App = () => {
  const [newItem, setNewItem] = useState([
    {
      title: 'Acheter du pain',
      completed: true
    },
    {
      title: 'Partir en voyage',
      completed: false
    },
    {
      title: 'Faire du sport',
      completed: false
    },  
  ])
  
  const [value, setValue] = useState('')

  const addTask = (e) => {
    e.preventDefault()
    if(value) {
      setNewItem([...newItem, {title:value, completed: false}])
      setValue('')
    }
  }

  const removeTask = (item) => {
    const arr = [...newItem]
    arr.splice(item,1)
    setNewItem(arr)
  }

  const isCompleted = (item) => {
    const newTasks = [...newItem]
    newTasks[item].completed = !newTasks[item].completed
    setNewItem([...newItem])
    console.log(newItem[item].completed)
  }


  
  return (
    <div className='container'>
      {/* TOGGLEMODE */}
      <ToggleMode />
       <div className='todo'>
        {/* addTask */}
        <form className='newTask' onSubmit={(e) => addTask(e)}>
            <input 
            value={value}
            onChange={(e) => setValue(e.target.value)}
            />
            <button type='submit' id="add"><BsFillPlusSquareFill/></button>
        </form>
        {/* ITEMS */}
        <div className='allTask'>
          <ul>
              {
                newItem.map((index, item) => {
                 return(
                   <Task
                   key={item}
                   item={item}
                   newItem={newItem}
                   index={index}
                   isCompleted={isCompleted}
                   removeTask={removeTask}
                   />
                 ) 
                })
              }
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
