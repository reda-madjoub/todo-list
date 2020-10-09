import React from 'react'
import { ImBin2 } from 'react-icons/im';
import { AiFillCheckCircle } from 'react-icons/ai';

function Task({index,isCompleted,item,removeTask}) {
    return (
        <div  className='task' key={item}>
            <li className={index.completed ? 'completed' : console.log('reda')}>{index.title}</li>
            <button onClick={() => removeTask(item)}><ImBin2/></button>
            <button onClick={() => isCompleted(item)}><AiFillCheckCircle/></button>
        </div>
    )
}

export default Task
