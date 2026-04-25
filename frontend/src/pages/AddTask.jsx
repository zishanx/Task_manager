import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function AddTask() {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async () => {
        if (!title) return alert('Title is required')
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
            <div className='header'>
                <div className='logo'>task<span>.</span>io</div>
            </div>
            <div className='form-card'>
                <h2 className='form-title'>New Task</h2>
                <input
                    className='form-input'
                    type='text'
                    placeholder='Title'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    className='form-input'
                    type='text'
                    placeholder='Description (optional)'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <div className='form-actions'>
                    <button className='cancel-btn' onClick={() => navigate('/')}>Cancel</button>
                    <button className='add-btn' onClick={handleSubmit}>Add Task</button>
                </div>
            </div>
        </div>
    )
}

export default AddTask