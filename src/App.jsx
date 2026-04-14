import AlertPanel from "./AlertPanel";

function App() {
  return (
    <div>
      <AlertPanel status="success" />
      <AlertPanel status="warning" />
      <AlertPanel status="error" />
    </div>
  );
}

export default App;
