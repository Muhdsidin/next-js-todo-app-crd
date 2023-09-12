"use client"

import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { set } from 'mongoose'

const inter = Inter({ subsets: ['latin'] })

export default function Home(/*{data}*/) {
  const [input , setInput] = useState("")
  const [data, setData] = useState([])
  console.log(input)
  const AddTodo = async()=>{
    const response = await axios("/api/add",{
      method:"POST",
      data:{
        input
      }

    })
    console.log(response.data)
    setData(response.data)
  }

  const fetchData = async ()=>{
    const response = await axios("/api/get-data")
    setData(response.data)
  }

  useEffect(()=>{
    fetchData()
  },[])

  const DeleteTodo = async (TodoId)=>{
    const response = await axios("/api/delete",{
      method:"DELETE",
      data:{
        TodoId
      }
    })
    setData(response.data)
  }
  //console.log(data)
  return (
    <>
    <div className='div' style={{marginLeft:"100px", marginTop:"100px", width:"300px"}}>
      <input type='text' placeholder='Enter Your Todo' style={{height:"30px"}}  onChange={(e)=> setInput(e.target.value)}/> <button style={{width:"70px",height:"30px",background:"red"}} onClick={AddTodo}>Add Todo</button>
    </div>

    <div>
      <ul>
        {data.map((val)=>(
          <div key={val._id} style={{display:"flex", marginTop:"20px"}}>
          <li >{val.Todo}</li> <button onClick={()=> DeleteTodo(val._id)}>Delete</button>
          </div>
        ))}
      </ul>
    </div>
    </>
  )
}

/*export async function getServerSideProps() {
  // Fetch data from an external API
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await res.json();

  // Pass data to the page via props
  return {
    props: {
      data,
    },
  };
}
*/ 