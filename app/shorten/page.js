"use client"
import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
const Shorten = () => {
  const [url, seturl] = useState("")
  const [shorturl, setshorturl] = useState("")
  const [generated,setgenerated] = useState("")
  const generate = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "url": url,
      "shorturl": shorturl
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        seturl("")
        setshorturl("")
        setgenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
        console.log(result)
        alert(result.message)
      })
      .catch((error) => console.error(error));
  }

  return (
    <div className='mx-auto  max-w-lg bg-purple-100 my-16 p-8 rounded-lg flex flex-col gap-4 '>
      <h1 className='font-bold text-2xl '>Gerate your short url</h1>
      <div className='flex flex-col gap-2'>
        <input className='px-4 py-2 focus:outline-purple-300 rounded-md' type="text" placeholder='Enter Your URl' value={url}
          onChange={e => { seturl(e.target.value) }} />
        <input className='px-4 py-2 focus:outline-purple-300' type="text" placeholder='Enter Your Prefered Short URl' value={shorturl} onChange={e => { setshorturl(e.target.value) }} />
        <button onClick={generate} className='bg-purple-500 shadow-lg rounded-lg p-3 py-1 my-3 font-bold cursor-pointer text-white'>Genrate</button>
      </div>
      {generated && <>
       <span className="font-bold text-lg">your Link </span><code><Link  target="_blank"href={generated}>{generated}</Link> 
        </code>
        </>}
    </div>
  )
}

export default Shorten
