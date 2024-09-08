import { useEffect, useState } from "react"
import Header from "./components/Header/Header"
import ToDosList from "./components/ToDosList/ToDosList"

function App() {

  const LOCAL_STORAGE_KEY = "Anonymous"

  const [toDos, setToDos] = useState(() => {
    const localToDos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    return localToDos ? localToDos : []
  })

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(toDos));
  }, [toDos]);





  

  function addToDos(toDosTitle){
    setToDos(prevToDos => [
      ...prevToDos,
      toDosTitle
    ]
      
    )
  }

  function delToDos(id){
    const copyToDos = toDos.filter((_, index) => index !== id)
    setToDos(copyToDos)
  }

  return (
    <>
      <Header onAddToDos={addToDos}/>
      <ToDosList toDosList={toDos} onDelToDos={delToDos}/>
    </>
  )
}

export default App
