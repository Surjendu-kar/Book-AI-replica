function App() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex" }}>
          <h1>Book AI</h1>
        </div>

        <div style={{ display: "flex", gap: 10 }}>
          <p>Features</p>
          <p>How It Works</p>
          <p>Roadmap</p>
          <p>API</p>
          <p>Price</p>
          <p>Models</p>
          <p>Login / Sign Up</p>
        </div>
      </div>
    </div>
  );
}

export default App;
