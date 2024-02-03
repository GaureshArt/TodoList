import React, { useEffect, useRef, useState } from 'react'
import {TodoProvider, todoContext} from "./context"
import {motion,useScroll} from "framer-motion"
import TodoForm from './Components/TodoForm';
import TodoItem from './Components/TodoItem';
import { FaRegMoneyBill1 } from 'react-icons/fa6';
import Yoursvg from "./assets/svg-path.svg"


function App() {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo)=>{
    setTodos((prev)=>[{id: Date.now(),todo},...prev])
  }
  const updateTodo =(id,todo)=>{
    setTodos((prev)=>prev.map((prevTodo)=>prevTodo.id===id?todo:prevTodo));
    // todos.map((prevTodo)=>{
    //   prevTodo.id ===id?prevTodo.todo=todo:prevTodo;
    // })
  }
  const deleteTodo = (id)=>{
    setTodos((prev)=>prev.filter((prevTodo)=>prevTodo.id!==id));
  }
  const toggleCheck = (id)=>{
    setTodos((prev)=>prev.map((todo)=>(
      todo.id===id?{...todo,complete:!complete}:todo
    )))
  };
  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem("todos"))
    if(todos && todos.length>0){
      setTodos(todos);
    }
  },[]);
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos]);

  const ref = useRef(null)
  return (
    <TodoProvider  value={{todos,addTodo,updateTodo,toggleCheck,deleteTodo}}>
     <motion.div ref={ref} className='bg-slate-700 h-lvh  text-center'>
      <div className='pt-10 text-5xl text-white font-mono tracking-wider'>
        My Todos
      </div>
      <div className='flex justify-center items-center mt-10 '>
      <TodoForm/>
      {/* <motion.svg drag xmlns='http://www.w3.org/2000/svg' width={1000} height={500}>

     <motion.path 
     d="M140 20C73 20 20 74 20 140c0 135 136 170 228 303 88-132 229-173 229-303 0-66-54-120-120-120-48 0-90 28-109 69-19-41-60-69-108-69z"
     fill="transparent"
     strokeWidth={12}
     stroke="rgba(255,255,255,1)"
     strokeLinecap="round"
     initial={{pathLength:0}}
     animate={{pathLength:1}}
     transition={{duration:4}}
     
     />
     </motion.svg> */}
      </div>
      {
        todos.map((todo)=>(
          <div key={todo.id} className='m-5 flex justify-center items-center'>
            <TodoItem todo={todo} reference={ref}/>
          </div>
        ))
      }
     </motion.div>
     {/* <TodoForm/>
     <TodoItem todo={""}/> */}
    </TodoProvider>
  )
}

export default App