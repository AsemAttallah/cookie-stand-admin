import { EDGE_UNSUPPORTED_NODE_APIS } from "next/dist/shared/lib/constants"
import Head from "next/head"
import { useState } from "react"
import Header from "@/components/Header"
import CreateForm from "@/components/CreateForm"
import Footer from "@/components/Footer"
import ReportTable from"@/components/ReportTable"
import {hourly_sales} from '@/data'


export default function Home() {
  const [allData,resLocationData]= useState([])
  function submitHandler(event){
    event.preventDefault()

    const allDataObj={
      Location:(event.target.location.value),
      Hourly_sales : hourly_sales,
    }

    resLocationData([...allData,allDataObj])

  } 

  // function handleTable(){
  //   if (allData.length){
  //     return allData
  //   }else{
  //     return ("No Cookie Stands Available")
  //   }

  // }
  function handleTable(){
      return allData
  }

  return (
    <>
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>
      <Header />
      <main>
        <CreateForm handler={submitHandler}/>
        <ReportTable data={handleTable()}/>
      </main>
      <Footer data={handleTable()}/>
    </>

  )
}








