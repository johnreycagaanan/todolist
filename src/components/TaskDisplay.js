import React,{useState,useEffect} from 'react'
// import {useParams} from 'react-router'
import {useLocation, useNavigate} from 'react-router-dom'

function TaskDisplay (props) {
  
  const navigate = useNavigate()
    const {taskList,setTaskList} = props
    const location = useLocation();
    const [isEditing, setIsEditing] = useState(false)
    const [editedValue,setEditValue] = useState({
      editedName: '',
      editedDetail: ''
    })
    const routeChange = () =>{
      navigate ("/")
    }

    const handleDelete = id =>{
      const filteredTasks = taskList.filter((task) =>
          {return task.id!==id}
      )
      setTaskList(filteredTasks)
      routeChange()

}

  const handleEdit =()=>{
    setIsEditing(true)
  }

  const handleCancelEdit = id =>{
  routeChange()
  }

  const handleSubmitEdit = id =>{
    const list = taskList
    list[id-1].taskName = editedValue.editedName
    list[id-1].taskDetail = editedValue.editedDetail
    routeChange()
  }
  return (
    <div>
      <div>
        {/* {console.log(location)} */}
        <span><button onClick={routeChange}>Back</button></span>
        <h1>{location.state.task.taskName}</h1>
        <h1>{location.state.task.taskDetail}</h1>
        {isEditing ? '' :<div>
        <button onClick={()=>handleEdit()}>Edit</button>
        <button onClick={()=>handleDelete(location.state.task.id)}>Delete</button>
        </div>
        }
        </div>
        <div>
         {
         isEditing ? <form>
          <div>
          <input
          placeholder = "Edit task name"
          value ={editedValue.editedName}
          onChange={e=>setEditValue({...editedValue, editedName: e.target.value})}
          />
          </div>
          <div>
          <input
          placeholder = "Edit task detail"
          value ={editedValue.editedDetail}
          onChange={e=>setEditValue({...editedValue, editedDetail: e.target.value})}
          />
          </div>
        <button onClick={()=>handleCancelEdit(location.state.task.id)}>Cancel</button>
        <button onClick={()=>handleSubmitEdit(location.state.task.id)}>Submit</button>
         </form>: ''
          }
        </div>
    </div>
  )
}

export default TaskDisplay