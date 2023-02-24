export default function Users(){
    let users = [
        {
            name: "Sasha 0",
            age: 22
        },
        {
            name: "Sasha 1",
            age: 10
        },
        {
            name: "Sasha 2",
            age: 30
        },
        {
            name: "Sasha 3",
            age: 8
        },
    ]
    const render = users.map((item)=>{
        <ul>
            <li>{item.name}</li>
            <li>{item.age}</li>
        </ul>
    })
    return(
        <>
        render
        </>
    )
}

