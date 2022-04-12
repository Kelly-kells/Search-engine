import React from 'react'
import * as Loader from "react-loader-spinner";

export const Load = () => {
  return (
    <div  className='flex justify-center items-center'>Load
<Loader type='puff' color='#00bfff' height= {550} width={80}/>
    </div>
  )
}

