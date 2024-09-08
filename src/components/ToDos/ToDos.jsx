import { RiDeleteBack2Line } from "react-icons/ri";


export default function ToDos({ id, toDos, delToDos }){

    function handleClick(event){
        event.preventDefault()
        delToDos(id)
    }
    return (
       <div>
            <li>{toDos} 
                <button 
                className="button"
                onClick={handleClick}
                >
                    <RiDeleteBack2Line size="18px" />
                </button>
            </li>
        </div>
        
    )
}