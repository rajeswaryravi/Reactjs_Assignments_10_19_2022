import logo from './logo.svg';
import './App.css';

import HeaderComponent from './components/HeaderComponent';
import ContentComponent from './components/ContentComponent';


function App() {
    return (
    <div className="App">
      <HeaderComponent signup="Sign Up Now"></HeaderComponent>
      <ContentComponent content="Content Header" item="Items Header"></ContentComponent>
        </div>
  );
}

export default App;
