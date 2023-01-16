import { BrowserRouter as Router } from 'react-router-dom';
import Paths from './routes';
import './App.scss';
import Layout from './components/Layout';

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
