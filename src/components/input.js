import React, {useState, useCallback} from 'react'

export default function Input(props) {

    const {createTimerFunc} = props
    // const [date, setDate] = useState({hour: '10', minute: '00', second: '00'})
    const [hour, setHour] = useState(0)
    const [min, setMin] = useState(0)
    const [sec, setSec] = useState(0)
    const [dateObj, setDateObj] = useState({hour: '', minute: '', second: ''})

    // const hourHandler = useCallback(
    //     (e) => {
    //         setDate( {hour: e.target.value})
    //     console.log('input hour ' ,date);

    //     },
    //     [],//value?
    // )
    // const minuteHandler = useCallback(
    //     (e) => {
    //         setDate({minute: e.target.value})
    //     console.log('input min ' ,date);                                             

    //     },
    //     [],//value?
    // )
    // const secondHandler = useCallback(
    //     (e) => {
    //         setDate({second: e.target.value})
    //     console.log('input sec ' ,date);

    //     },
    //     [],//value?
    // )

    const createReminderHandler = ()=>{
        setDateObj(dateObj.hour = hour, dateObj.minute = min, dateObj.second = sec)
        console.log('date input ', dateObj);

        createTimerFunc(dateObj)
        // setDate({hour: date.hour, minute: date.minute, second: date.second})
    }


    return (
        <div>
            {/* <input onChange={e => setDate({hour : e.target.value})} value={date.hour} placeholder='H'/>        
            <input onChange={e => setDate({minute : e.target.value})} value={date.minute} placeholder='M'/>        
            <input onChange={e => setDate({second : e.target.value})} value={date.second} placeholder='S'/>         */}
            <input onChange={e => setHour(e.target.value)} value={hour} placeholder='H'/>        
            <input onChange={e => setMin(e.target.value)} value={min} placeholder='M'/>        
            <input onChange={e => setSec(e.target.value)} value={sec} placeholder='S'/>
            <button onClick={createReminderHandler}> Create reminder </button>
        </div>
    )
}
