import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Password from "./pages/password"
import SignUp from "./pages/signup"
import ImageUpload from "./pages/imageUpload"
import ImageInsert from "./pages/imageInsert"
import Library from "./pages/library"

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  )
}

export default App
