import { useState } from 'react'
import IndirectChild from "./IndirectChild"

export default function IndirectParent(props) {
    const [name, setName] = useState('?')
    const [age, setAge] = useState(0)
    const [isNerdy, setIsNerdy] = useState(false)
    function clickPai(name, age, isNerdy){
        setName(name)
        setAge(age)
        setIsNerdy(isNerdy)
        console.log(`O pai se chama ${name}, possui ${age} anos de idade e ${isNerdy ? 'é nerd' : 'não é nerd' }`);
    }
    return (
        <div>
            <div>Pai: se chama {name}, possui {age} anos de idade e {isNerdy ? 'é nerd' : 'não é nerd' }</div>
            <IndirectChild clickFilho={clickPai} />
        </div>
    )
}