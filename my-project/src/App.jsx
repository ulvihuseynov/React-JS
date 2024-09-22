import Header from "./Header"

import { courses } from "./Data"
import Course from "./Course"
import Footer from "./Footer"

function App() {


  return (
 <div >
  <Header  />
 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 container my-10">
 {
    courses?.map((course)=>(
      <Course  key={course.id} course={course}/>
    ))
  }
 </div>
 <Footer />
 </div>
  )
}

export default App
