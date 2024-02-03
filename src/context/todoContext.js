import { createContext,useContext } from "react";
export const todoContext = createContext({
    todos:[
        {
            id:1,
            todo:"Tdodo",
            complete:false,
        }
    ],
    addTodo:(todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleCheck:(id)=>{},
})

export const useTodo = ()=>{
    return useContext(todoContext)
}
export const TodoProvider = todoContext.Provider;