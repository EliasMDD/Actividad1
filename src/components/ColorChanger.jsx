export const ColorChanger = (props) => {
    const estilocuadrado= {
        backgroundColor: props.color,
    };
    return( 
        <div className="cuadrado" style={estilocuadrado}></div>
        )
}


