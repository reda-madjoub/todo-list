import React, { useState } from 'react';
import { FiMoon } from 'react-icons/fi';
import { FiSun } from 'react-icons/fi';

 

function ToggleMode() {
    
    const [darkMode, setDarkMode] = useState(false);
    const storageDarkMode = () => {
        if(darkMode) {
            document.body.style.backgroundColor = '#efefef' 
        } else {
            document.body.style.backgroundColor = '#2f2f2f' 
        }
    
    }
    

    return (
        <div className='mode'>
            <input 
                type='checkbox'  
                id='chk'
                onClick={() => setDarkMode(!darkMode)}
                onChange={() => storageDarkMode(darkMode)}
            />
            <label className={darkMode ? 'label dark' : 'label'} htmlFor='chk'>
                <i id='moon'><FiMoon/></i>
                <i id='sun'><FiSun/></i>
                <div className={darkMode ? 'ball' : 'ball dark'}></div>
            </label>
        </div>
    )
}

export default ToggleMode
export { darkMode } from './ToggleMode'
