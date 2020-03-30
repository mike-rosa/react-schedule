import React, {useState} from 'react';
// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppBar from '../src/templates/AppBar'
import AppAsideMenu from './templates/AppAsideMenu'
import AppMiniMenu from './templates/AppMiniMenu'
import AppContent from './templates/AppContent'


function App() {
//****************hooks********************/

const [menu, setMenu] = useState(true)
// ***********functionality**************//
const handleToggle = (e) =>{
  setMenu(!menu)
  console.log(!menu);
    
}


  return (
    <div className={`${menu?'app':'toggle-actived'}`}>
      <AppBar/>
      {menu?<AppAsideMenu handleToggle={handleToggle} />: <AppMiniMenu handleToggle={handleToggle}/>}
      
     
      <AppContent/>
    </div>
  );
}

export default App;
