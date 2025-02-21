
import ScrollToTop from 'react-scroll-to-top';
import './App.css';
import { AuthProvider } from './AuthContext.js';
import RoutingContainar from './RoutingContainar';
import { ToastContainer, } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function App() {



  return (
    <>

      <AuthProvider>

        <ToastContainer />
        < RoutingContainar />
        <ScrollToTop smooth />

      </AuthProvider>,

    </>
  );
}

export default App;
