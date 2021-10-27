import {Provider} from 'react-redux'
import generateStore from './Redux/store'
import {
    BrowserRouter as Router,
  } from "react-router-dom";
import Routes from "./Routes/Routes";
import AuthContextProvider from '../src/Contexts/AuthContext'
import MenuPrincipal from "./Components/menuPrincipal/MenuPrincipal";
import TopBar from "./Components/topBar/TopBar";


function App() {
  const store = generateStore()
  return (
    <Provider store={store}>
     <AuthContextProvider>
      <Router>
        <div>
          {/* <TopBar /> */}
          {/* <MenuPrincipal /> */}
          <Routes />
        </div>
      </Router>
      </AuthContextProvider>
    </Provider>
  );
}

export default App;
