import React from 'react'
import { UseFetch } from '../../../utils/query'

const Home = () => {



  const { datas, isLoading, isError } = UseFetch("")
  return (
    <div>
      <h1>Community</h1>
      <input type="text" placeholder='Search User...' />
      <button>{}</button>
    </div>
  )
}

export default Home