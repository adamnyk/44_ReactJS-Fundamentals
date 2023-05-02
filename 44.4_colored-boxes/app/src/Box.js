import './Box.css'

const Box = (props) => {

    return (
        <div
            className="Box"
            style={{ backgroundColor: props.color }}
        >
            {props.msg}
        </div>
            
    )
}

export default Box