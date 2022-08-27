import React,{useEffect, useState} from 'react'
import Task from './Task'

const TodoList = ({taskList,setTaskList}) => {
  // console.log(taskList)

  const [count,setCount] = useState(1)
  const [formInputValues, setFormInputValues] = useState({
    formTaskValue: '',
    formDetailValue: ''
   })

const handleForm = (e) =>{
  e.preventDefault()
  const newTask=
    {
        id: taskList.length+1,
        taskName: formInputValues.formTaskValue,
        taskDetail: formInputValues.formDetailValue
    }
    // console.log(taskList)
    // const list=taskList
    // console.log(list)
    // list.push(newTask)
    setTaskList([...taskList, newTask])
    // setTaskList(list)
    setCount(count+1)
    // localStorage.setItem('taskList', JSON.stringify(taskList))
    
}

  return (
   
    <div>
      <h1>Todo List</h1>
      <form>
            <div>
            <input 
            placeholder="Enter task"
            value={formInputValues.formTaskValue}
            onChange={e=>setFormInputValues({...formInputValues, formTaskValue: e.target.value})}
            />
            </div>
            <div>
            <input
            placeholder="Enter task details"
            value={formInputValues.formDetailValue}
            onChange={e=>setFormInputValues({...formInputValues, formDetailValue: e.target.value})}
            /></div>
            <button onClick={handleForm}>Add</button>
        </form>
        <div>
        {
        taskList.map((task,key)=>{
             return <Task
              key={key}
              setCount={setCount}
              taskList={taskList}
              setTaskList={setTaskList}
              id={task.id}
              taskName={task.taskName}
              taskDetail={task.taskDetail}
              />
        })}
      {/* {console.log(taskList)} */}

        </div>
    </div>
  )
}

export default TodoList