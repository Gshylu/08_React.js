function Component1(){
    return(
        <><h1><i>I am Component1</i></h1></>
    )
}

function Component2(){
    return(
        <>
            <Component1/>
            <button>button</button>
        </>
    )
}

export default Component2;