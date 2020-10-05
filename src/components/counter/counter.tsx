import React from 'react';

type Props = {
    count: number;
    data: any;
    handleIncrementClick: any;
    handleDecrementClick: any;
    handleDataClick: any;
    handleTestParamClick: any
}

const Counter: React.FC<Props> = ({count, data, handleIncrementClick, handleDecrementClick, handleDataClick, handleTestParamClick}) => (
    <div>
        <h1>Hello world Redux Saga! {count}</h1>
        <button onClick={() => handleDecrementClick()}>Decrement</button>
        <button onClick={() => handleIncrementClick()}>Increment</button>
        <button onClick={() => handleDataClick()}>Get Data</button>
        <button onClick={() => handleTestParamClick(11)}>Test Param</button>
        <p>{JSON.stringify(data)}</p>
    </div>
)
export default Counter;