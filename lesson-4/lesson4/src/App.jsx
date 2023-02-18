import {user} from "./components/List/Users";
import Cart from "./components/Cart/Cart";
import './components/Cart/index.css'
import Footer from "./common/Footer/Footer";
import Header from "./common/Header/Header";
import './main.css'


export default function App() {
 
  const saved = user.map(item=>
    <Cart name={item.name} description={item.description} img={item.img}/>);
    
    
  return (
    <div className="wrapper">
    <Header/>
    
    <ul className="listed">
      <li>
        {saved}
      </li>
    </ul>
     <Footer/>
     </div>
    )
    
   
}
