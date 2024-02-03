import React, { useState } from 'react'
import { useTodo } from '../context'
import { MdOutlineTipsAndUpdates } from "react-icons/md";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { FaTrashCan } from "react-icons/fa6";
import { MdTipsAndUpdates } from "react-icons/md";
import { motion } from 'framer-motion';
import { IoCheckmarkDoneCircle } from "react-icons/io5";


function TodoItem({todo,reference}) {
    const {toggleCheck,updateTodo,deleteTodo} = useTodo();
    const [isTogglecheck,setIsTogglecheck] = useState(false);
    const [todoMsg,setTodoMsg] = useState(todo.todo);
    const [isRead,setIsRead] = useState(true);
    const isReadChange = ()=>{
      setIsRead((res)=>!res);
      console.log(todo)
    }
    const editTodo = ()=>{
        updateTodo(todo.id,{...todo,todo:todoMsg})
        setIsRead((res)=>!res);
    }
    const toggleChecked = ()=>{
        toggleCheck(todo.id)
    }
    const deletetodo = ()=>{
        deleteTodo(todo.id)

    }
  return (
    <> 

    <motion.div   drag dragConstraints={reference} whileDrag={{scale:1.1}}  dragTransition={{bounceStiffness:12}} className='w-[800px] h-16 bg-white  flex items-center gap-3   border-white rounded-sm'>
    <input
    className={`bg-slate-400 w-[600px] h-12 rounded-lg ml-5 font-mono text-xl tracking-wider ${isTogglecheck?`bg-emerald-900 italic line-through`:``} `}
    value={todoMsg}
    onChange={(e)=>setTodoMsg(e.target.value)}
    readOnly={isRead}
    
    />
    {isTogglecheck?<button className='text-3xl ' onClick={()=>setIsTogglecheck(!isTogglecheck)}><IoCheckmarkDoneCircle /></button>:<button  className='text-3xl ' onClick={()=>setIsTogglecheck(!isTogglecheck)}><IoCheckmarkDoneCircleOutline /></button>}
    {isRead?<button  className='text-3xl ' onClick={isReadChange}><MdOutlineTipsAndUpdates /></button>:<button className='text-3xl' onClick={editTodo}><MdTipsAndUpdates /></button>}
    <button  className='text-3xl ' onClick={deletetodo}><FaTrashCan /></button>

    
    </motion.div>
    </>
  )
}

export default TodoItem