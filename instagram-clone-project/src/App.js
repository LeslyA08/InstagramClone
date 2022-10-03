import './App.css';
import profiles from "./data/profiles";
import Nav from "./components/Nav/Nav.jsx"
import ProfileContainer from './components/ProfileContainer/ProfileContainer';

console.log(profiles);

function App() {
  return (
    <div>
     <Nav />
     <ProfileContainer profiles={profiles}/>
    </div>
  );
}

export default App;
