const styles = {
    color: 'black',
    border: '1px solid',
    width: '900px',
    display: 'flex',
    gap: '20px',
    padding: '20px',
    'flex-direction': 'column',
    
}


export default function Cart(props){
    return(
        <div className="home">
        <div style={styles}>
       <h2>Hello there, {props.name}!</h2>
       <p>You are {props.description}.</p>
       <img src={props.img} alt="" />
       </div>
       </div>
    )
}

