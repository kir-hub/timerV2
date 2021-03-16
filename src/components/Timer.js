import React, {useState, useEffect, useRef} from 'react'

export default function Timer(props) {

    const {index, deleteTimer, dataDate, title} = props

    const [timerHours, setHours] = useState('00')
    const [timerMins, setMins] = useState('00')
    const [timerSecs, setSecs] = useState('00')
    const [warning, setWarning] = useState(false)


    let interval = useRef()

    const timerStart =()=>{
        const startCountTime = new Date(dataDate).getTime()

        interval = setInterval(()=>{
            const currentTime = new Date().getTime()
            const leftTime = startCountTime - currentTime

            const hours = Math.floor(leftTime % (1000*60*60*24) / (1000*60*60))
            const mins = Math.floor(leftTime % (1000*60*60) / (1000*60))
            const secs = Math.floor(leftTime % (1000*60) / 1000) 

            if(leftTime < 0){
                clearInterval(interval.current)

            }else{
                setHours(hours)
                setMins(mins)
                setSecs(secs)
                if(hours == 0 && mins <= 15){
                    setWarning(true)
                }
            }
        }, 1000)
    }

    useEffect(() =>{
        timerStart()
        return ()=>{
            clearInterval(interval.current)
        }
    })

    return (
        <div>
            <p>hours {timerHours}</p>
            <p>mins {timerMins}</p>
            <p>seconds {timerSecs}</p>
        </div>
    )
}