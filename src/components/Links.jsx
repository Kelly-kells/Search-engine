import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'

export const Links = () => {
  return (
    <div>
      <Routes>
        <Route  path='/'/>

        <Navigate to ="/Seach"/>
      </Routes>
    </div>
  )
}
