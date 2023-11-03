import "./App.css";
import Plants from "./components/plants/plants";

function App() {
  return (
    <>
      <div className='flex justify-end'>
        <div className="h-screen bg-red-100 w-2/5">
          <Plants />
        </div>
      </div>
    </>
  );
}

export default App;
