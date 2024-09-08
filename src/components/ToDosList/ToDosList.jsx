import ToDos from "../ToDos/ToDos";
import styles from "./ToDosList.module.css"


export default function ToDosList({ toDosList, onDelToDos}){
    return(
        <ol className={styles.list}>
            {
                toDosList.map((toDosElement, id) => {
                    return(
                        <ToDos key={id} id={id} toDos={toDosElement} delToDos={onDelToDos}/>
                    )
                   
                }
                    
                )
            }     
        </ol>
       
    )
}