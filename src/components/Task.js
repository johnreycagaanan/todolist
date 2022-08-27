import React, {useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import TaskDisplay from './TaskDisplay'


const Task = ({taskName,taskDetail,id,taskList,setTaskList,setCount}) => {
  // console.log(taskName)
  // console.log(taskDetail)
  // console.log(id)
  // console.log(taskList)

    const task ={
        taskName, taskDetail, id
    }
    const navigate = useNavigate();
    const routeChange = () =>{
        navigate(`/${id}`, {state: {task,taskList}});
    }
  return (<>
        <h1 onClick={routeChange}>{taskName}</h1>
        </>
  )
}

export default Task