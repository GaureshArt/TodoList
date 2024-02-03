import React, { useState } from 'react'
import { useTodo } from '../context';

function TodoForm() {
    const [todo,setTodo] = useState("");
    const {addTodo} = useTodo();
    const add = (e)=>{
        e.preventDefault();
        if(!todo) return;
        addTodo(todo);
        setTodo("");
    }
  return (
    <>
        <form onSubmit={add}>
      <div className='bg-slate-900 w-[800px] h-20 rounded-xl flex gap-10  place-content-around  pt-4  item-center'>
      <input
      className='h-12 w-[600px]  rounded-xl bg-slate-200 font-mono text-xl tracking-wider'
      value={todo}
      onChange={(e)=>{
        setTodo(e.target.value)
      }}
      />
      <button className='w-[80px]  h-12 rounded-xl text-white text-xl font-bold font-mono tracking-widest bg-slate-600'
      type='submit'
      >ADD</button>
      </div>
      </form>
    </>
  )
}

export default TodoForm