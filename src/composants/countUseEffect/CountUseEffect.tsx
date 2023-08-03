import React, { useEffect, useState } from 'react'

const CountUseEffect = () => {

    const [count, setCount] = useState(0);

    useEffect(() => {

        const countInterval = setInterval(() => {

            setCount((count) => count + 1);

        }, 1000)

        return () => {
            clearInterval(countInterval);
        }
    })


  return (
    <div>{count}</div>
  )
}

export default CountUseEffect