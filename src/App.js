import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Edit from "./component/form/Edit";
import Parent from "./component/form/Parent";
import User from "./component/form/User";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Add */}
        <Route path="/" element={<User />} />
        {/* Table */}
        <Route path="/table" element={<Parent />} />
        {/* Edit */}
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
