function Event(){
  
function Handler(){
 const Elem  =  document.getElementById('color');
 Elem.innerHTML = "Yes i have changed my dress color "
 Elem.style.color="blue"

}

return(
    <>
        <h1 id="color" style={{color:'red'}}>i want to change my dress color blue</h1>
        <button onClick={Handler}>button</button>
    </>
)



}

export default Event