import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>{import.meta.env.VITE_APP_NAME}</h1>

      <p>I am learning how React projects are created and managed.</p>

      <h2>What I learned:</h2>
                    
      <p>Day 15 is complete!</p>
      
      <ul>
        <li>Vite</li>
        <li>npm</li>
        <li>package.json</li>
        <li>Dependencies</li>
        <li>Environment Variables</li>
        <li>Git</li>
        <li>GitHub</li>
      </ul>
    </div>
  );
}

export default App;