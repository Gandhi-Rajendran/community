import React from 'react'
import { useSelector } from 'react-redux'
// import { UseFetch } from '../../../utils/query'

const Home = () => {
  const page = useSelector(state=>state.user)

  console.log("user",page)


  // const { datas, isLoading, isError } = UseFetch("")
  return (
    <div>
      <h1>Community</h1>
      <input type="text" placeholder='Search User...' />
      <button>{}</button>
    </div>
  )
}

export default Home