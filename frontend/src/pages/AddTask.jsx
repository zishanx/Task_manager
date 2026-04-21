import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddTask() {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const navigate = useNavigate()


    const handleSubmit = async () => {
        if (!title) return alert('Title is required');
            try {
                await fetch('http://localhost:5000/tasks', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ title, description })
                })
                navigate('/')
            } catch (err) {
                console.log(err)
            }
        
    }

    return (
        <div>
            <h1>Add Task</h1>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button onClick={handleSubmit}>Add Task</button>
            <button onClick={() => navigate('/')}>Cancel</button>
        </div>
    )
}

export default AddTask