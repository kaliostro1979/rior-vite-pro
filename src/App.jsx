import {BrowserRouter} from "react-router-dom";
import RoutesModule from "./Routes/Routes";

function App() {
  return (
      <div className={"container"}>
        <BrowserRouter>
          <RoutesModule/>
        </BrowserRouter>
      </div>
  );
}

export default App;