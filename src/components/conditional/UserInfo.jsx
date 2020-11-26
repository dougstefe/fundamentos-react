import If from "./If"
export default function UserInfo(props) {
    return (
        <div>
            <If test={props.user && props.user.name}>
                Seja bem vindo <strong>{props.user.name}</strong>
            </If>
        </div>
    )
}