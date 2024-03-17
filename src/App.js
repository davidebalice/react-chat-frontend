import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Messenger from "./components/Messenger";
import ProtectRoute from "./components/ProtectRoute";
import Register from "./components/Register";
import Edit from "./components/Edit";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/chat/login" element={<Login />} />
          <Route path="/chat/register" element={<Register />} />
          <Route path="/chat/edit" element={<Edit />} />
          <Route
            path="/"
            element={
              <ProtectRoute>
                <Messenger />
              </ProtectRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
