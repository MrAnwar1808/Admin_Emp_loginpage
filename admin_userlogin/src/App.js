
import { BrowserRouter } from 'react-router-dom';
import AdminRoutes from './AdminRoute/AdminRoute';
import './App.css';



function App() {
  return (
    <div >
      <BrowserRouter>
            <AdminRoutes />
      </BrowserRouter>

    </div>
  );
}

export default App;
