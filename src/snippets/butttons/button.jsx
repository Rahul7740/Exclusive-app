

function Button(props){
    return(
        <>
            <button style={{backgroundColor:(props.bgColor)}} className="all-buttons">{props.name}</button>
        </>
    )
}

export default Button