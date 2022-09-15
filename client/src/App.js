import "./App.css";
import Graph from "./components/Graph";
import Form from "./components/Form";

function App() {
  return (
    <div className="App mx-auto">
      <div className="mx-auto max-w-6xl text-center rounded drop-shadow-lg text-white bg-indigo-500 h-[60px] flex items-center justify-center mb-2 gap-2">
        <div className="text-l">Made with ❤️ by Chethan</div>
        <div className="flex items-center w-12 justify-center hover:scale-125">
          <a href="https://github.com/chethanBy" target="_blank">
            <box-icon type="logo" name="github"></box-icon>
          </a>
        </div>
      </div>
      <div className="mx-auto max-w-6xl text-center drop-shadow-lg text-gray-800">
        <h1 className="text-4xl py-8 mb-10 bg-slate-800 text-white rounded">
          Expense Tracker
        </h1>
        {/* grid columns */}
        <div className="grid md:grid-cols-2 gap-4">
          {/* chart */}
          <Graph />
          {/* form */}
          <Form />
        </div>
      </div>
    </div>
  );
}

export default App;
