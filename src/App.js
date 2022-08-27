import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {useState,useEffect} from 'react'
import TodoList from './components/TodoList'
import TaskDisplay from './components/TaskDisplay';

// const getLocalStorage = () =>{
//   let tasks = localStorage.getItem('taskList')
//   if(tasks){
//     return(tasks = JSON.parse(localStorage.getItem('taskList')))
//   }else{
//     return []
//   }
// }

function App () {
const [taskList,setTaskList] = useState([])
useEffect(()=>{
  const data = JSON.parse(localStorage.getItem('taskList'))
  if (data){
    setTaskList(data)
  }
},[])
useEffect(()=>{
  localStorage.setItem('taskList', JSON.stringify(taskList))
},[taskList])
  return (
    <div className='App'>
      
      <Router> 
        <Routes>     
          <Route path="/" element={<TodoList setTaskList={setTaskList} taskList={taskList}/>}/>
          <Route path="/:id" element={<TaskDisplay taskList={taskList} setTaskList={setTaskList}/>}/>
        </Routes>     
      </Router>
      </div>
  );
}

export default App;
