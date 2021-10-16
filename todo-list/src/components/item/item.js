import React from 'react';

import './item.css';

const styles = {
    
    backgroundColor: "rgb(43, 145, 43)", 
    color: "white",
    borderRadius: "4px",
    padding: "3px 5px",
    cursor: "pointer"
    
};

const Item = ({label, done, onDelete, onToggleDone}) => {

    let classNames = 'list-group-item';

    if(done) {
        classNames += ' important'
    };

    return(
        <li className={classNames}>
            {label}
            <div>
                <span 
                className="icon"
                style={styles}
                onClick={onToggleDone}>
                    <i 
                    className="fas fa-check"></i>
                </span>
                <span 
                className="icon"
                style={{
                    ...styles, 
                    backgroundColor: "red", 
                    padding: "3px 7px", 
                    marginLeft: "5px"}}
                    onClick={onDelete}>
                    <i className="fas fa-times"></i>   
                </span>            
            </div>
        </li>
    );
};

export default Item;