import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Categorize from '../Components/Categorize'
import Cloze from '../Components/Close'
import Comprehension from '../Components/Comprehension'


const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Categorize/>}/>
            <Route path="/close" element={<Cloze/>}/>
            <Route path="/comprehension" element={<Comprehension/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes