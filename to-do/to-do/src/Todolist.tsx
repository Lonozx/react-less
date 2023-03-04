
const styles = {
    display: 'flex',
    'justify-content': 'center'
} 

type PropsType = {
    title: string
}

export default function TodoList(props: PropsType) {

    return (
        <div className="container">
            <h3>{props.title}</h3>
            <div>
                <input type="text" />
                <button>+</button>
            </div>
            <ul style={styles}>
                <li>
                    <input type="checkbox" checked={true} /><span>CSS</span>
                    <input type="checkbox" checked={true} /><span>JS</span>
                    <input type="checkbox" checked={false} /><span>React</span>
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
