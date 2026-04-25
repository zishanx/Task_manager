import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TaskCard from '../components/TaskCard';

function Home() {
    const [tasks, setTasks] = useState([])
    const [allTasks, setAllTasks] = useState([])
    const [filter, setFilter] = useState('all')
    const navigate = useNavigate()

    const fetchAllTasks = async () => {
        try {
            const res = await fetch('https://task-manager-nwae.onrender.com')
            const data = await res.json()
            setAllTasks(data)
        } catch (err) {
            console.log(err)
        }
    }

    const fetchTasks = async () => {
        try {
            let url = 'https://task-manager-nwae.onrender.com'
            if (filter === 'completed') url += '?completed=true'
            if (filter === 'active') url += '?completed=false'
            const res = await fetch(url)
            const data = await res.json()
            setTasks(data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchAllTasks()
    }, [])

    useEffect(() => {
        fetchTasks()
        fetchAllTasks()
    }, [filter])

    const total = allTasks.length
    const done = allTasks.filter(t => t.completed).length
    const active = allTasks.filter(t => !t.completed).length

    return (
        <div>
            <div className='header'>
                <div className='logo'>task<span>.</span>io</div>
                <button className='add-btn' onClick={() => navigate('/add')}>+ Add Task</button>
            </div>

            <div className='stats'>
                <div className='stat'>
                    <div className='stat-num s-purple'>{total}</div>
                    <div className='stat-label'>Total</div>
                </div>
                <div className='stat'>
                    <div className='stat-num s-teal'>{done}</div>
                    <div className='stat-label'>Done</div>
                </div>
                <div className='stat'>
                    <div className='stat-num s-pink'>{active}</div>
                    <div className='stat-label'>Active</div>
                </div>
            </div>

            <div className='filters'>
                <button className={`filter-btn ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>All</button>
                <button className={`filter-btn ${filter === 'active' ? 'active' : ''}`} onClick={() => setFilter('active')}>Active</button>
                <button className={`filter-btn ${filter === 'completed' ? 'active' : ''}`} onClick={() => setFilter('completed')}>Completed</button>
            </div>

            <div className='tasks'>
                {tasks.map(task => (
                    <TaskCard key={task._id} task={task} onDelete={() => { fetchTasks(); fetchAllTasks(); }} />
                ))}
            </div>
        </div>
    )
}

export default Home