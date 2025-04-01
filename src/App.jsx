import { BrowserRouter } from 'react-router-dom';

import { Routes } from '@/Components';
import { Header } from '@/Components/ui';
import { ErrorBoundary } from '@/Layouts';
import { AuthProvider } from '@/context';

function App() {
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
