
import './App.css';
import { MyRoutes } from './routes/MyRoutes.js';
import { Header , Footer} from './components';

function App() {
  return (
    <div className="App bg-white  dark:bg-gray-900  dark:text-white">
      <Header />
      <MyRoutes />
      <Footer />
    </div>
  );
}

export default App;
