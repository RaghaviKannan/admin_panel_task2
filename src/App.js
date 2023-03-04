import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Sidebar from './Sidebar'
import Topbar from './Topbar';
import Dashboard from './Dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Users from './Users';
import Createuser from './Createuser';
import Products from './Products';
import Viewuser from './Viewuser';
import Edituser from './Edituser';
import Createproduct from './Createproduct';

function App() {
  return (
    <BrowserRouter>
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
            <Topbar />
            <Routes>
              <Route path="/dashboard" element={<Dashboard />}></Route>
              <Route path="/users/*" element={<Users />}></Route>
              <Route path="/user_create" element={<Createuser />}></Route>
              <Route path="/products" element={<Products />}></Route>
              <Route path="/product_create" element={<Createproduct />}></Route>
              <Route path="/users/user_view/:id" element={<Viewuser />}></Route>
              <Route path="/users/user_edit/:id" element={<Edituser />}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;
