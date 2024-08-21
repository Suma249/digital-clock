import React, { useEffect, useState } from 'react'

function Clock() {
      const [timer, setTimer]=useState(0);
    useEffect(
        ()=>{
            const interval=setInterval(()=> setTimer(new Date()),1000)
            return ()=>{
                clearInterval(interval)
            }
        },
        []
    )
  return (
    <span className='time'>{timer.toLocaleString()}</span>
  )
}

export default Clock