import { BrowserRouter } from 'react-router-dom';

import { Routes } from '@/Components';
import { Header } from '@/Components/ui';
import { ErrorBoundary } from '@/Layouts';
import { AuthProvider } from '@/context';
import {useEffect} from "react";
import {useSelector} from "react-redux";

function App() {
  const {showModal} = useSelector(state => state.similarProducts)

  useEffect(() => {
    if(showModal){
      document.body.classList.add("overflow-hidden")
    }else {
      document.body.classList.remove("overflow-hidden")
    }
  }, [showModal])

  console.log(showModal)

  return (
    <AuthProvider>
      <BrowserRouter>
        <ErrorBoundary>
          <Header />
          <div className={'container'}>
            <Routes />
          </div>
        </ErrorBoundary>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
