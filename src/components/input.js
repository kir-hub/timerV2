import React, {useState, useCallback} from 'react'

export default function Input(props) {

    const {createTimerFunc} = props
    
    const [dateObj, setDateObj] = useState({hour: 0, minute: 0, second: 0})

    const hourHandler = useCallback(
        (e) => {
            setDateObj( {hour: e.target.value, minute: e.target.value, second: e.target.value})
        console.log('input hour ' ,dateObj);

        },
        [],
    )
    const minuteHandler = useCallback(
        (e) => {
            setDateObj({hour: e.target.value, minute: e.target.value, second: e.target.value})
        console.log('input min ' ,dateObj);                                             

        },
        [],
    )
    const secondHandler = useCallback(
        (e) => {
            setDateObj({hour: e.target.value, minute: e.target.value, second: e.target.value})
        console.log('input sec ' ,dateObj);

        },
        [],
    )

    const createReminderHandler = ()=>{
        

        createTimerFunc(dateObj)
        
    }


    return (
        <div>
            
            <input onChange={hourHandler} value={dateObj.hour} placeholder='H'/>        
            <input onChange={minuteHandler} value={dateObj.minute} placeholder='M'/>        
            <input onChange={secondHandler} value={dateObj.second} placeholder='S'/>
            <button onClick={createReminderHandler}> Create reminder </button>
        </div>
    )
}
