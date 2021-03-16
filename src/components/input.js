import React, {useState, useCallback} from 'react'

export default function Input(props) {

    const {createTimerFunc, deleteTimerFunc} = props
    
    const [dateObj, setDateObj] = useState({hour: 0, minute: 0, second: 0})

    const timeHandler = useCallback((e) =>  setDateObj( {hour: e.target.value, minute: e.target.value, second: e.target.value}), []);

    
    const createReminderHandler = ()=>{
        createTimerFunc(dateObj)
        
    }
    const deleteReminder = ()=>{
        deleteTimerFunc()
    }


    return (
        <div>
            
            <input onChange={timeHandler} value={dateObj.hour} placeholder='H'/>        
            <input onChange={timeHandler} value={dateObj.minute} placeholder='M'/>        
            <input onChange={timeHandler} value={dateObj.second} placeholder='S'/>
            <button onClick={createReminderHandler}> Create reminder </button>
            <button onClick={deleteReminder}>Delete reminder</button>
        </div>
    )
}
