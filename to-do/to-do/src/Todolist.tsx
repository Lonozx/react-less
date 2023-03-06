import App from "./App"

const styles = {
    display: 'flex',
    'justify-content': 'center',
    'flex-direction': 'column',
}
const render = {
    display: 'flex',
    'justify-content': 'center',
    'align-items': 'center',
    gap: '20px',
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
 /**  //or TaskType[] --> */   tasks: Array<TaskType>
    deleteTask: Function
}

export default function TodoList(props: PropsType) {
    // debugger
    return (
        <div className="container">
            <h3>{props.title}</h3>
            <div>
                <input style={inputStyles} type="text" />
                <button>+</button>
            </div>
            <ul style={styles}>
                {
                    props.tasks.map(item => {
                        return <li style={render}>
                            <input type="checkbox" checked={item.isDone} />
                            <span>{item.title}</span>
                            <button onClick={() => { {props.deleteTask(item.id)}}}>X</button>
                        </li>

                    })
                }
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    )
}
