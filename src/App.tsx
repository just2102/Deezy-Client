import { Route, Routes } from "react-router-dom"
import Header from "./Components/Header"
import CreatePost from "./pages/CreatePost"
import Home from "./pages/Home"

function App() {
  return (
    <div className="app-wrapper">
      <Header></Header>
      <main className="sm:p-8 px-4 py-8
      w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/create-post" element={<CreatePost/>}></Route>
        </Routes>

      </main>
    </div>

  )
}

export default App
