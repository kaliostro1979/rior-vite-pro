import {BrowserRouter} from "react-router-dom";
import RoutesModule from "./Routes/RoutesModule.jsx";
import Header from "./Components/Header/Header.jsx";


function App() {
  return (
      <BrowserRouter>
          <Header/>
          <div className={"container"}>
              <RoutesModule/>
          </div>
      </BrowserRouter>
  );
}

export default App;