import React,{useContext, useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import ReactPlayer from 'react-player'
import { useResultContext} from './contexts/ResultContextProvider'
import { Load } from './Load'

export const Results = () => {
  const{ getResults, results, loading, searchTerm, setSearchTerm}=useResultContext();

  const location=useLocation();
  useEffect(() => {
    getResults('/seach/q=javascript mastery&num=40')
  },[])
  

  if (loading) return <Load />
  
    switch (location.pathname) {
      case '/search':
        
        return (
          <div className='flex flex-wrap justify-between space-y-6 sm:-56'>
             

          </div>
        )
      
        case '/images':
        
          return 'IMAGES';
          case '/news':
        
            return 'NEWS';

            case '/videos':
        
              return 'VIDEOS';
      default:
        return 'error';
    }

}
