import React, {useState, useCallback} from 'react'

export default function Input(props) {
    const {createTimerFunc, deleteTimerFunc} = props
    const [dateObj, setDateObj] = useState({hour: 0, minute: 0, second: 0})
    // const {target: value: newState  } =  e
    const {e} = {}
    const hourHandler = useCallback((e) => setDateObj(prevState => ({ ...prevState, hour: e.target.value })) , []);
    const minuteHandler = useCallback((e) => setDateObj(prevState => ({ ...prevState, minute: e.target.value })), []);
    const secondHandler = useCallback((e) => setDateObj(prevState => ({ ...prevState, second: e.target.value })), []);
    const createReminderHandler = ()=>createTimerFunc(dateObj)      
    const deleteReminder = ()=>   deleteTimerFunc()
    return (
        <div>
            <input onChange={hourHandler} value={dateObj.hour} placeholder='H'/>        
            <input onChange={minuteHandler} value={dateObj.minute} placeholder='M'/>        
            <input onChange={secondHandler} value={dateObj.second} placeholder='S'/>
            <button onClick={createReminderHandler}> Create reminder </button>
            <button onClick={deleteReminder}>Delete reminder</button>
        </div>
    )
}
