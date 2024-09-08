import styles from "./Header.module.css";
import { LuListTodo } from "react-icons/lu";
import { FaRegPlusSquare } from "react-icons/fa";
import { useState } from "react";

export default function Header({
    onAddToDos
}){

    const [toDosTitle, setToDosTitle] = useState('')

    function handleSubmit(event){
        event.preventDefault()
        onAddToDos(toDosTitle)
        setToDosTitle('')
    }

    function handleChange(event){
        setToDosTitle(event.target.value)
    }

    return(
        <div className={styles.header}>
            <span>
                <LuListTodo />
                <h4>ToDos <sub><a href="https://www.facebook.com/profile.php?id=100072079721548">Powered by MAlif</a></sub></h4>
            </span>

            <div>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <input 
                        type="text" 
                        placeholder="Add a new task/item"
                        value={toDosTitle}
                        onChange={handleChange}
                    />
                    <button className={styles.button}>
                        <span>
                            Create <FaRegPlusSquare />
                        </span>
                    </button>
                </form>
            </div>
        </div>
    )
}