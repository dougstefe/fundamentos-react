import { useState } from "react"

export default function Input(props) {
    const [value, setValue] = useState("")
    function change(e){
        console.log(e.target.value)
        setValue(e.target.value)
    }
    return (
        <div>
            <input value={value} onChange={change} /><br/>
            <input value={value} readOnly /><br/>
            <input value={undefined} />
        </div>
    )
}