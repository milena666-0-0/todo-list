import React, {useState} from 'react';

import './task.css';

const Task = ({onItemAdded}) => {

    const [inputValue, setInputValue] = useState('');
    
    const onChangeValue = (e) => {
        setInputValue(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        onItemAdded(inputValue);
        setInputValue('');
        // const cb = onItemAdded || (() => {});
        // cb(inputValue);
    };

    return(
        <form 
        onSubmit={onSubmit}>
            <div className="d-flex align-items-center justify-content-end">
                <span className="title">Task</span>
                <input
                type="text"
                value={inputValue}
                onChange={onChangeValue}
                className="col-10 form-control input"
                placeholder="What do you need to do"/>
            </div>
            <div className="d-flex justify-content-end">
                <button 
                    type="submit"
                    className="add-item btn btn-primary">
                        Save item
                </button>    
            </div>
        </form>
    );
};

export default Task;