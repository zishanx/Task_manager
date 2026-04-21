export default function TaskCard({ task, onDelete }) {

    const handleDelete = async () => {
        try {
            await fetch(`http://localhost:5000/tasks/${task._id}`, {
                method: 'DELETE'
            })
            onDelete()
        } catch (err) {
            console.log(err)
        }
    }
    const handleToggle = async () => {
        try {
            await fetch(`http://localhost:5000/tasks/${task._id}`, {
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
        <div>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>{task.completed ? 'Completed' : 'Not Completed'}</p>
            <button onClick={handleDelete}>Delete</button>
            <button onClick={handleToggle}>Toggle Complete</button>
        </div>
    )
}