import './App.css';
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Videos from './components/Videos'
function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header/>
      <div className="app__page">
      {/* Sidebar */}
      <Sidebar/>
      {/* Recommended video */}
      <Videos/>
      </div>
    </div>
  );
}

export default App;
