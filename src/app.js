import React from 'react';
import CounterClass from './counters/class';
//import CounterFunction from './counters/function';
//        <h2>Counter As Function</h2>
//<CounterFunction/>

export default function(){
    return(
    <div>
        <h2>Counter As Class</h2>
        <CounterClass min={1} max={10}/>
    </div>

    );
}