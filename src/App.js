import './App.css';
import ChatComponent from './ChatComponent';
import SideBar from './SideBar';

function App() {
  return (
    <div className="app">
      <div className="app__body">
<SideBar/>
<ChatComponent />
</div>
    </div>
  );
}

export default App;
