const App = () => {
    return (
        <div>
            <Person name="Adam" age={33} hobbies={["plants","climging","family"]} />
            <Person name="Cousin Michael" age={17} hobbies={["basketball"]} />
            <Person name="Lynn" age={21} hobbies = {null}/>
        </div>
    )
}