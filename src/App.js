import { BrowserRouter as Router } from "react-router-dom";
import "./App.scss";
import Layout from "./components/Layout";
import Paths from "./routes";

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Paths />
        </Layout>
      </Router>
    </div>
  );
}

export default App;
