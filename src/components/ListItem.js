import React from 'react'
import Card from './Card'

function DoneImg(props) {
    if (props.done) {
        return (<img src="toDoListReact/images/s.png" alt='done'></img>)
    } else {
        return (<img src="toDoListReact/images/n.png" alt='undone'></img>)
    }
}

function ListItem(props) {
    return (<li>
    <Card className={props.item.done ? "done item" : "item"}> 
    {props.item.text}
            <div>
                <button onClick={() => { props.onDone(props.item) }}><DoneImg done={props.item.done}></DoneImg></button>
                <button className="deleteButton" onClick={() => { props.onItemDeleted(props.item) }}><img src="toDoListReact/images/delete.png" alt='delete'></img></button>
            </div>
            </Card>
        </li>)
}

export default ListItem;