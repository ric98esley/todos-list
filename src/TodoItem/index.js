import React from "react";
import './TodoItem.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck } from "@fortawesome/free-regular-svg-icons";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

function TodoItem(props){
    return(
        <li className="TodoItem">
            <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}><FontAwesomeIcon icon={faSquareCheck} onClick={props.onComplete} /></span>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>{props.text}</p>
            <span className="Icon Icon-delete"><FontAwesomeIcon icon={faTrashCan} onClick={props.onDelete}/></span>
        </li>
    )
}

export { TodoItem };