
import * as any from "./export";



const name = "Gannoji shylu";
const date = new Date().toLocaleDateString();
const time =  new Date().toLocaleTimeString();

const img1 = "https://picsum.photos/200/300";
const img2 = "https://picsum.photos/210/300";
const img3 = "https://picsum.photos/220/300";
const img4 = "https://picsum.photos/230/300";
const link = "http://127.0.0.1:5500/betaReact/src/new.html"


let curDate = new Date(2022 , 10 , 29 ,20);
curDate = curDate.getHours();
let greeting = "";
const cssStyle = {};

if(curDate >=1 && curDate<12){
  greeting = "Good Morning";
  cssStyle.color="green";
}else if(curDate>=12 && curDate < 19){
  greeting = "Good Afternoon";
  cssStyle.color="orange";
}else{
  greeting = "Good Night";
  cssStyle.color="yellow";
}



export default function Myfun(){
// try using jsx attributes
return(
  <>

<h1 contentEditable = "true" style={{ textShadow:"0px 2px 4px black"}}>hello My name is  {name}</h1>,
<p style={{color : "red",border: "1px  solid  orange"}}>todays {date}</p>,
<p >Current Time{time}</p>,
<img src={img1} alt="some images from lorem picsum" height={100} width={100}></img>
<img src={img2} alt="some images from lorem picsum" height={100} width={100}></img>
<img src={img3} alt="some images from lorem picsum" height={100} width={100}></img>
<a   href={link}  target="_anthing">
<img src={img4} alt="some images from lorem picsum" height={100} width={100}></img>
</a>
  
<h1>hello,<span style={cssStyle}>{greeting}</span></h1>

<h1>{any.ex2}</h1>
</>)
}

