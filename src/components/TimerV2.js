import React, {useState,  useRef, useEffect} from 'react'

export default function TimerV2(props) {
    const {hour, minute, second} = props
    const [timer, setTimer] = useState({s: second, m: minute, h: hour})
    const calculateTimer = ()=>{
        const sec = (timer.h == 0 && timer.m == 0 && timer.s == 0) ?  0 : ((timer.s == 0 && timer.m > 0) ? 5 : timer.s - 1 )
        const min = (timer.h == 0 && timer.m == 0) ? 0 : ((timer.h > 0 && timer.m == 0 ) ? 5 : (timer.m > 0 && timer.s == 0 ? timer.m - 1 : timer.m )) 
        const hours = (timer.h == 0) ? 0  : (timer.m == 0 && timer.h > 0)  ? timer.h - 1  : timer.h
        return { s: sec,m: min,h: hours};
    }
    const formatValues = (timer) => ({
        s: timer.s < 10 && '0' + timer.s,
        m: timer.m < 10 && '0' + timer.m,
        h: timer.h < 10 && '0' + timer.h
    })
    useEffect(() => calculateTimer() ,[]);
    useEffect(() => {
        const timeout = setTimeout(() => {
            setTimer(calculateTimer());
        }, 1000);
        formatValues(timer)
        return () => {
            clearTimeout(timeout)
        };
    }, [timer]);

    return (
        <div>
            <p> {timer.h} </p>
            <p> {timer.m} </p>
            <p> {timer.s} </p>
        </div>
    )
}
