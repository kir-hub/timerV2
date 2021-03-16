import React, {useState} from 'react'
import Timer from './Timer'
import Input from './input'
import TimerV2 from './TimerV2'

export default function TimerDashboard() {
    const [time, setTime] = useState({hour: '00', minute: '00', second: '00'})
    const [dataDate, setDataDate] = useState('')


    const createTimerFunc = (date) => {
        setTime(time.hour = date.hour, time.minute = date.minute, time.second = date.second)

        
        setDataDate(<TimerV2  hour={time.hour} minute={time.minute} second={time.second} />)
    }


    return (
        <div>
            <Input createTimerFunc={createTimerFunc}/>
            {dataDate}
        </div>
    )
}
