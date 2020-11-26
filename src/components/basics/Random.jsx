export default function Random(props){
    const {min, max} = props;
    return (
        <div>
            <p>Número: {min + Math.floor((max - min) * Math.random())}</p>
        </div>
    )
}