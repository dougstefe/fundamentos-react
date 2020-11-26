
import { Children, cloneElement } from "react";

export default function Family(props) {
    return (
        <div>
            {
                Children.map(props.children, (el) => cloneElement(el, props))
            }
        </div>
    )
}