

function Image(props){
    return(
    <img
    src={props.img}
    alt = "new pic"
    className = "card_img"
    height = {300}
    width = {300}
    ></img>
    )
}
export default Image;