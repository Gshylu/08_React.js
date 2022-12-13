import "./style.css"
import Image from "./img"



function Card(props){
return (
<>
    <div className = "cards" >
    <div className = "card">
      <Image img={props.img}/>
        <div className="card_info" >
        <span className="card_category" style={{color:'red'}}>
           <h1>{props.title}</h1>
        </span>
        <h3 className="card_title">{props.sname}</h3>
        <a
        href={props.link}
        target = "_slef"
        >
        <button><b>WATCH NOW</b></button>
        </a>
        </div>
    </div>
 </div>
</>

)}

export default Card;