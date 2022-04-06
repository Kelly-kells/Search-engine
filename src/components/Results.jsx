import React,{useContext, useEffect} from 'react'
import {uselocation} from 'react-router-dom'
import ReactPlayer from 'react-player'
import { useResultContext} from './contexts/ResultContextProvider'
import { Load } from './Load'

export const Results = () => {
  const{ getResults, results, loading, searchTerm, setSearchTerm}=useResultContext();

  const location=uselocation();

  if (loading) return <Load />
   console.log=(location.pathname)
    switch (location.pathname) {
      case '/search':
        
        return 'Search'
    
      default:
        return 'error';
    }

}
