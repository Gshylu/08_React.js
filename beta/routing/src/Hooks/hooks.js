// which will install the hook rulesnpm i eslint-plugin-react-hooks


import React,{useEffect,useState} from "react";



const colors = {

    sea :'#e6aae3',
    sand:'#16ea2e',
    peach:'#ee786e'

}



function Page(){
    const [color, setColor] = useState(colors.sand);
useEffect(()=>{
    document.body.style.background=color
},[color])

    return(
        <>
        <select value={color} onChange={
            (e)=>setColor(e.target.value)
        }>
            {Object.entries(colors).map(
                ([name,value])=>(
                   <option key={`color--${name}`} value={value}>{name}</option>
                )
            )}
             {/*geting all the values of object and equate and map them as name:value and set them as option */}
       
       
        </select>
        </>
    )
}

export default Page;