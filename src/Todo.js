import React, { useEffect, useState } from 'react'
import List from './components/List'
import Item from './components/Item'
import TodoForm from './components/TodoForm'
import './Todo.css'
import Modal from './components/Modal'

const SAVED_ITEMS = "savedItems"

function Todo() {

    const [showModal, setShowModal] = useState(false)
    const [items, setItems] = useState([]);


    useEffect(() => {
        let savedItems = JSON.parse(localStorage.getItem(SAVED_ITEMS))
        if (savedItems) {
            setItems(savedItems);
        }
    }, [])

    useEffect(() => {
        localStorage.setItem(SAVED_ITEMS, JSON.stringify(items))
    }, [items])

    function onAddItem(text) {
        let item = new Item(text);
        setItems([...items, item])
        onHideModal();
    }

    function onItemDeleted(item) {
        let filteredItems = items.filter(it => it.id !== item.id)
        setItems(filteredItems)
    }

    function onDone(item) {
        let updatedItems = items.map(it => {
            if (it.id === item.id) {
                it.done = !it.done;
            }
            return it;
        })
        setItems(updatedItems);
    }

    function onHideModal(e) {
        setShowModal(false)
    }

    return (<div className="container">
        <header className='header'><h1 className='title'>Todo List </h1> <button onClick={() => { setShowModal(true) }} className="headerButton">+</button> </header>
        <List onDone={onDone} onItemDeleted={onItemDeleted} items={items}></List>
        <Modal show={showModal} onHideModal={onHideModal}> <TodoForm onAddItem={onAddItem}></TodoForm></Modal>
    </div >)
}

export default Todo;