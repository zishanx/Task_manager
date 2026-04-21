import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TaskCard from '../components/TaskCard';


function Home() {
    const [tasks, setTasks] = useState([])
    const [filter,setFilter] = useState('all')
    const navigate = useNavigate()

    const fetchTasks = async () => {
        try {
            let url = 'http://localhost:5000/tasks'
            if(filter === 'completed') url += '?completed=true'
            if(filter === 'active') url += '?completed=false'
            const res = await fetch(url)
            const data = await res.json()
            setTasks(data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchTasks()
    }, [filter])

    return (
        <div>
            <h1>My Tasks</h1>
            <button onClick={() => navigate('/add')}>Add Task</button>
            <div>
                <button onClick={()=> setFilter('all')}>All</button>
                <button onClick={()=> setFilter('active')}>Active</button>
                <button onClick={()=> setFilter('completed')}>Completed</button>
            </div>
            {tasks.map(task => (
                <TaskCard key={task._id} task={task} onDelete={fetchTasks}></TaskCard>
            ))}
        </div>
    )

}

export default Home;