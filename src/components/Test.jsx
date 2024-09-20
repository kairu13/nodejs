import React, { useEffect, useState } from 'react'

const Test = () => {
  
   
    const [message, setMessage] = useState('')

    useEffect(() => {
       
        fetch('http://localhost:5000/')
            .then(res => res.json())
            .then(res => {
                console.log(res)
                setMessage(res.message)
            })
    }, [])
  
  
  
    return (<div>
        
        <div>Test {message}</div>
     

        </div>
)
}

export default Test