import React, { useState } from 'react'

const ToDoList = () => {
  const [tasks,setTask]=useState(['leigh','mamadou'])
  const [newTask,setNewTask]=useState('')

  const HandleTaskChange=(e)=>{
    setNewTask(e.target.value)
  }

  const addTask=()=>{
   if(newTask.trim() !==''){
     setTask(t=>[...t,newTask])
    setNewTask('')
   }
  }

  const deleteTask=(index)=>{
     const updatedTask=tasks.filter((_,i)=>  i !==index)

      setTask(updatedTask)
  }

  const moveUpTask=(index)=>{
   if(index>0){
     const updatedTask=[...tasks];
    [updatedTask[index],updatedTask[index-1]]=
    [updatedTask[index-1],updatedTask[index]];

    setTask(updatedTask)
   }
  }
  const moveDownTask=(index)=>{
   if(index<tasks.length-1){
     const updatedTask=[...tasks];
   
    [updatedTask[index+1],updatedTask[index]]=
    [updatedTask[index],updatedTask[index+ 1]]
    setTask(updatedTask)
   }
  }
  return (
    <>
    <div className='to-do-list'>
      <h1>To Do List</h1>
       <div className='input-container'>
      <input type="text" onChange={HandleTaskChange} value={newTask} placeholder='Enter your task....' />
     
        <button className='add-btn' onClick={addTask}>add task</button>
      </div>

      <ol>
        {tasks.map((task,index)=><li key={index}><span className='text'>{task}</span>
        <button className='delete-btn' onClick={()=>deleteTask(index)}>delete</button>
        <button className='move-up-btn' onClick={()=>moveUpTask(index)}>☝️</button>
        <button className='move-down-btn' onClick={()=>moveDownTask(index)}>👇</button>
        
        </li>)}
      </ol>

    </div>
    </>
  )
}

export default ToDoList