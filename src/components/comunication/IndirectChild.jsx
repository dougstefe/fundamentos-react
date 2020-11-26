export default function IndirectChild(props) {
    const generateAge = () => 30 + Math.floor((80 - 30) * Math.random())
    const generateIsNerdy = () => Math.random() > 0.5
    return (
        <div>
            <div>
                Filhos
            </div>
            <button onClick={ e => props.clickFilho('Douglas', generateAge(), generateIsNerdy()) }>
                Fornecer informações do pai
            </button>
        </div>
    )
}