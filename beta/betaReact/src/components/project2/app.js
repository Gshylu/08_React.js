import data from "./api"
import Card from "./card";

function App(){
return(
<>
 {data.map((value , index , array) => {
    console.log(index+array[0].sname)
    return (
    <Card 
    key = {Math.random()}
    img={value.img}
    title={value.title}
    sname={value.sname}
    link={value.link}/>
    )
 })}


     </>
     )
}

export default App;


/* props 
<Card img = "https://tse4.mm.bing.net/th?id=OIP.EpdUOliu1nB3TuERA3lQbgHaJQ&pid=Api&P=0"
        title = "A Netflix Orignal Series"
        sname = "bride of habaek"
        link  = "https://www.netflix.com/watch/81012489?trackId=255824129"/>
     </>
way two by fetching it from api
       <Card 
    img={data[0].img}
    title={data[0].title}
    sname={data[0].sname}
    link={data[0].link}/>
*/