import { Outlet } from "react-router-dom"

function App() {

  return (
    <>
      <main className="min-h-screen mb-10">
        <Outlet /> 
      </main>
    </>
  )
}

export default App
