import { useState, useRef, useEffect } from "react";

export const Mutable = () => {
    const [timer, setTimer] = useState(0)
    const interValRef = useRef<number | null>(null)

    const stopTimer = () => {
        if (interValRef.current) window.clearInterval(interValRef.current)
    }

    const startTimer = () => {
        interValRef.current = window.setInterval(() => {
            setTimer((timer) => timer + 1)
          }, 1000)
    }
    useEffect(() => {
      interValRef.current = window.setInterval(() => {
        setTimer((timer) => timer + 1)
      }, 1000)
    
      return () => {
        stopTimer()
      }
    }, [])
    
    return(
        <div className="flex">
        <div>
            HookTimer - {timer} - 
            <button onClick={() => stopTimer()}>Stop Timer</button>
        </div>
<button onClick={() => startTimer()}>Start Timer</button>

</div>
    )
}