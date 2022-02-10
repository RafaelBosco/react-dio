const Item = (props/*{children} --> desestruturação*/) => {
    return(
        <> {/*className = {props.className} */}
            <a href="#" className="list-group-item list-group-item-action list-group-item-dark">
                { props.texto }
                {/* props.children --> precisa de tag de fechamento */}
            </a>
        </>
        
    )
}

export default Item;