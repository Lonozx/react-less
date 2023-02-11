import './header.css'
function Header(props){
    return (
        <header className='header'>
            <nav>
                <ul className='home'>
                    <li className={`text ${props.className}`}><a href='#'>Home</a></li>
                    <li className={`text ${props.className}`}><a href='#'>About</a></li>
                    <li className={`text ${props.className}`}><a href='#'>Contact</a></li>


                </ul>
            </nav>
        </header>
    )
}

export default Header