import {useEffect , useState} from "react";

const Data = () => {

  const [data , setData] = useState([]);

  const getData = async ()=>{
    try{
    const res = await fetch('https://api.polygon.io/v3/reference/conditions?asset_class=stocks&apiKey=G0eElN1HhnvSFT18Nzx70E6Hdp3FNsRZ')
    const newdata = await res.json();
    console.log(newdata.results[0]);
    setData(newdata.results[0]);
  }catch(err){
          
    console.log(err);
  }
  }

useEffect(()=>{
        getData()
},[]);

  return (
    <>
    <div>Display data</div>

   <div>
    <h1>id : {data.id}</h1>
   
    <h1>type : {data.type}</h1>
    <h1>asset_class : {data.asset_class}</h1>
  
    <h1>sip_mapping :{" { "} <br/>
       UTP : {data.sip_mapping.UTP} 
                    <br/>{" } "}</h1>
   
  
   </div>
          
       
    </>
  )
}

export default Data