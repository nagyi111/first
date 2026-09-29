import React from 'react'

export const NewTodo = (handleAdd) => {
    const [newTask, setnewTask] = useState("")
    console.log(newTask);

    const handleSubmit = () => {
        if(!newTask.trim()) return 
        handleAdd(newTask)
    }
}

    return (
        <div class>
            <input type="text"
                placeholder='új feladat...'
                value={newTask}
                className='border rounded p-3 flex-1'
                onChange={(e)=>setnewTask(e.target.value)}
                ></input>
                <button><MdAddCircleOutline style={{fontSize: '2rem', color: 'blue', cursor}}></MdAddCircleOutline></button>
        </div>
    )