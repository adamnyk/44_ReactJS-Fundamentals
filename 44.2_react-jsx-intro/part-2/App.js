const App = () => {
    return (
        <div>
            <Tweet
                name="Adam" 
                username="adamnyk" 
                date={new Date().toDateString()}
                message="First tweet message!"
            />
            <Tweet
                name="Caro" 
                username="caropc" 
                date={new Date().toDateString()}
                message="Caro's message"
            />
            <Tweet
                name="React" 
                username="reactjs" 
                date={new Date().toDateString()}
                message="React is always changing... 🫤"
            />
        </div>
    )
}