import React, {useState} from 'react';

export default function () {

    let [cnt,setCnt] = useState(0);

    let increase = () => {
        setCnt(cnt+1);
    }

    return (
        <div>
            <strong>{cnt}</strong>
            <br />
            <button onClick={increase}>+1</button>

        </div>
    );



}