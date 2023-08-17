import { EDGE_UNSUPPORTED_NODE_APIS } from "next/dist/shared/lib/constants"
import Head from "next/head"
import { useState } from "react"


export default function Home() {
  const [allData,resLocationData]= useState("Report Table Comming Soon...")
  function submitHandler(event){
    event.preventDefault()
    
    let data = {
      "Location": (event.target.location.value),
      "Minimum Customers per Hour": event.target.Minimum.value,
      "Maximum Customers per Hour": event.target.Maximum.value,
      "Average Cookies per Sale": event.target.Average.value,
    }
    
    data = JSON.stringify(data);

    resLocationData(data)
  } 


  return (
    <>
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>
      <Header />
      <main>
        <Form handler={submitHandler}/>
        <Paragraph data={allData}/>
      </main>
      <Footer/>
    </>

  )
}


function Header() {
  return (
    <header className="p-5 bg-green-500 text-3xl">
      <h1>Cookie Stand Admin</h1>
    </header>
  )
}

function Form(props) {
  return (
    <form className="flex flex-wrap flex-col bg-green-300 w-3/4 mx-auto mt-16  rounded-lg" onSubmit={props.handler}>
      <div>
        <h1 className="text-center p-4 text-3xl">Create Cookie Stand</h1>
      </div>
      <div className="flex m-4">
        <label className="text-2xl">Location</label>
        <input className="w-full ml-4" name="location" />
      </div>
      <div className="flex flex-wrap text-center justify-around  ml-8">
        <div className="w-1/5 ">
          <label className="text-xl">Minimum Customers per Hour</label>
          <input className="w-full" name="Minimum" />
        </div>
        <div className="w-1/5">
          <label className="text-xl">Maximum Customers per Hour</label>
          <input className="w-full" name="Maximum" />
        </div>
        <div className="w-1/5">
          <label className="text-xl">Average Cookies per Sale</label>
          <input className="w-full" name="Average" />
        </div>
        <div className="w-1/5">
          <button className="px-14 py-10 m-2 bg-green-500 text-xl ">Create</button>
        </div>
      </div>
    </form>
  )
}

function Footer(){
  return(
    <footer className="p-5 bg-green-500 text-1xl absolute bottom-0 w-full">
      &copy;2023
    </footer>
  )
}

function Paragraph(props){
  return(
    <>
    <h1 className="text-center text-2xl m-9">{props.data}</h1>
    </>
  )
}