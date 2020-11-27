
import './App.css';
import Header from "./Header";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="app">
     <h1>SHED</h1>

     <Header />
     <div className="app_body">
       <Sidebar />
       
       {/* React-Content-Router */}
     </div>
    </div>
  );
}

export default App;
