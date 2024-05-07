import React, { useState } from 'react'
import styles from './CounterAppstyles.module.css'

const CounterApp = () => {
    let[state,setstate]=useState(0)
    const incrementcount =()=>{
        setstate(state+1);
    }
    const decrementcount =()=>{
        setstate(state-1)
    }
  return (
    <div className={styles.div}>
        <h1 className={styles.h1}>COUNTER APP</h1>
        <h1 className={styles.h2}>Count : {state}</h1>
        <button onClick={incrementcount} className={styles.but1}>Increment</button>
        <button onClick={decrementcount} className={styles.but2}>decrement</button>
    </div>
  )
}

export default CounterApp