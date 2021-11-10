import "./app.css";

function App() {
    const name = "yurim";
    return (
        <>
            <h1>hello</h1>
            {name && <h1>{name}</h1>}
            {["😀", "😁"].map((item) => (
                <div>{item}</div>
            ))}
        </>
    );
}

export default App;
