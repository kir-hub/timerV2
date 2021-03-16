import React, {useState} from 'react'
import Timer from './Timer'
import Input from './input'
import TimerV2 from './TimerV2'

export default function TimerDashboard() {
    const [dataDate, setDataDate] = useState('')


    const createTimerFunc = (date) => {
        setDataDate(<TimerV2  hour={date.hour} minute={date.minute} second={date.second} />)
    }
    const deleteTimerFunc =()=>{
        setDataDate('')
    }


    return (
        <div>
            <Input createTimerFunc={createTimerFunc} deleteTimerFunc={deleteTimerFunc}/>
            {dataDate}

        </div>
    )
}
