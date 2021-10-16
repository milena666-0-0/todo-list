import React, {useState} from 'react';

import ItemList from '../item-list';
import Task from '../task';

import './app.css';

const App = () => {

    // const [inputValue, setInputValue] = useState('');

    const [data, setData] = useState([
        {id: 1, label: 'Make a new purchase', done: false},
        {id: 2, label: 'Make new friends', done: false},
        {id: 3, label: 'Watch Venom 2', done: false}
    ]);

    const onDelete = (id) => {
        const idx = data.findIndex(item => item.id === id);
        const items = [
            ...data.slice(0, idx),
            ...data.slice(idx + 1)
        ];
        setData(items);
    };

    const onToggleDone = (id) => {
        const idx = data.findIndex(item => item.id === id);
        const newItem = {...data[idx], done: !data[idx].done};
        const newData = [
            ...data.slice(0, idx),
            newItem,
            ...data.slice(idx + 1)
        ];
        setData(newData);
    };

    const addNewItem = (label) => {
        const item = createNewItem(label); 
        const newData = [...data, item ];
        setData(newData);
        console.log(newData)
    };

    const createNewItem = (label) => {
        return { 
            id: Math.floor(Math.random() * 100),
            label,
            done: false 
        };
    };

    return(
        <div className="container align-items-center col-5 jumbotron context">
            <h1 className="title">To do:</h1>  
                <ItemList
                items={data}
                onDelete={onDelete}
                onToggleDone={onToggleDone}/> 

                <Task
                onItemAdded={addNewItem}/>
        </div>
    );
};

export default App;