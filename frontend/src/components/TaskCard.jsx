function TaskCard({ task, onDelete }) {

    const handleDelete = async () => {
        try {
            await fetch(`https://task-manager-nwae.onrender.com/tasks/${task._id}`, {
                method: 'DELETE'
            })
            onDelete()
        } catch (err) {
            console.log(err)
        }
    }

    const handleToggle = async () => {
        try {
            await fetch(`https://task-manager-nwae.onrender.com/tasks/${task._id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ completed: !task.completed })
            })
            onDelete()
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className={`task-card ${task.completed ? 'done' : ''}`}>
            <div className='check-wrap'>
                <div
                    className={`check ${task.completed ? 'checked' : ''}`}
                    onClick={handleToggle}
                ></div>
            </div>
            <div className='task-body'>
                <div className='task-title'>{task.title}</div>
                {task.description && <div className='task-desc'>{task.description}</div>}
            </div>
            <div className='task-actions'>
                <button className='icon-btn' onClick={handleDelete}>✕</button>
            </div>
        </div>
    )
}

export default TaskCard