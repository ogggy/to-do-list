import Textfield from '@atlaskit/textfield'
import Button from '@atlaskit/button'
import ToDoList from './components/ToDoList';
import { useCallback, useEffect, useState } from 'react';
import { v4 } from 'uuid'

const TODO_APP_STORAGE_KEY = 'TODO_APP'

function App() {
  
  const [toDoList, setToDoList] = useState([])
  const [textInput, setTextInput] = useState("")
  
  useEffect(() => {
    const storagedToDoList = localStorage.getItem(TODO_APP_STORAGE_KEY)
    if (storagedToDoList) {
      setToDoList(JSON.parse(storagedToDoList))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(TODO_APP_STORAGE_KEY, JSON.stringify(toDoList))
  }, [toDoList])

  const onTextInputChange = useCallback((event) => {
    setTextInput(event.target.value)
  }, []) 
  
  const addTodoClick = useCallback((event) => {
    setToDoList(
      [
        {id: v4(), name: textInput, isCompleted: false},
        ...toDoList
      ])
    setTextInput("")
  }, [textInput, toDoList])

  const onCheckButtonClick = useCallback((id) => {
    setToDoList((prevState) =>
      prevState.map((item) =>
        item.id === id ? {...item, isCompleted: !item.isCompleted} : item
      )
    )
  }, [])
  

  return (
    <>
      <h3>To Do List</h3>
      <Textfield
        name='add-todo'
        placeholder='Add to do...'
        elemAfterInput={
          <Button
            isDisabled={!textInput}
            appearance={'primary'}
            onClick={addTodoClick}
          >Add</Button>
        }
        css={{padding: '2px 4px 2px'}}
        value={textInput}
        onChange={onTextInputChange}
      />
      <ToDoList toDoList={toDoList} onCheckButtonClick={onCheckButtonClick}/>
    </>
  );
}

export default App;
