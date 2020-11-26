import students from "../../data/students"
export default function StudentsList(props){
    return (
        <div>
            <ul style={{listStyle: "none"}}>
                {
                    students.map(
                        (student, i) =>
                            <li key={i}>
                                 {student.id}) {student.name} - {student.grade}
                            </li>
                    )
                }
            </ul>
        </div>
    )
}