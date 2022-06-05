import React from 'react'
import ToDoItem from './ToDoItem'

export default function ToDoList({toDoList, onCheckButtonClick}) {
  return (
    <>
      { toDoList.map(toDoItem => <ToDoItem key={toDoItem.id} item={toDoItem} onCheckButtonClick={onCheckButtonClick} />)}
    </>
  )
}
