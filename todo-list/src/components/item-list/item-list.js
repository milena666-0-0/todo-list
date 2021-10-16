import React from 'react';

import Item from '../item';

const ItemList = ({items, onDelete, onToggleDone}) => {

    const elements = items.map(item => {

        const {id, ...props} = item;

        return(
            <Item
            key={id} 
            {...props}
            onDelete={() => onDelete(id)}
            onToggleDone={() => onToggleDone(id)}/>
        );
    });

    return(
        <ul className="list-group">
           {elements}
        </ul>
    );
};

export default ItemList;