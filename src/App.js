import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Timeline from './components/timeline/Timeline';


function App() {
  return (
    <div className="app">
      {/* Side bar */}
      <Sidebar />

      {/* タイムライン */}
      <Timeline />
      {/* Widget */}
    </div>
  );
}

export default App;
