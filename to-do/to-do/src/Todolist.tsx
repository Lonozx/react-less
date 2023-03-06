
const styles = {
    display: 'flex',
    'justify-content': 'center',
        
} 
const inputStyles = {
    border: 'none',
    'border-bottom': '1px solid',
    // 'border-radius': '20px'
    padding: '20px'
}

type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
 /**  //or TaskType[] --> */   tasks : Array<TaskType>
  
}

export default function TodoList(props: PropsType) {

    return (
        <div className="container">
            <h3>{props.title}</h3>
            <div>
                <input style={inputStyles} type="text" />
                <button>+</button>
            </div>
            <ul style={styles}>
                <li>
                    <input type="checkbox" checked={props.tasks[0].isDone} /><span>{props.tasks[0].title}</span>
                    <input type="checkbox" checked={props.tasks[1].isDone} /><span>{props.tasks[1].title}</span>
                    <input type="checkbox" checked={props.tasks[2].isDone} /><span>{props.tasks[2].title}</span>
                </li>
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    )
}
