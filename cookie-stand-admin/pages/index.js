import Head from "next/head"

export default function Home(){
  
  return(
    <>
    <head>
      <title>Cookie Stand Admin</title>
    </head>
    <body>
      <header className="p-5 bg-green-500 text-3xl">
        <h1>Cookie Stand Admin</h1>
      </header>
      <main>
        <form className=" bg-green-300 m-24  rounded-lg">
          <h1 className="text-center p-4 text-3xl">Create Cookie Stand</h1>
          <div className="flex m-4 justify-center">
            <label className="text-2xl">Location</label>
            <input className="w-full ml-4" name="location"/>
          </div>
          <div className="flex text-center">
            <div className="w-full ml-24 m-2">
              <label className="text-xl">Minimum Customers per Hour</label>
              <input className="w-full" name="Minimum"/>
            </div>
            <div className="w-full ml-24 m-2 ">
              <label className="text-xl">Maximum Customers per Hour</label>
              <input className="w-full" name="Maximum"/>
            </div>
            <div className="w-full ml-24 m-2 ">
              <label className="text-xl">Average Cookies per Sale</label>
              <input className="w-full" name="Average"/>
            </div>
            <button className="pl-16 pr-16 pt-10 pb-10 m-2 bg-green-500 text-xl ">Create</button>
          </div>
        </form>
        <h1 className="text-center text-2xl m-9">Report Table Comming Soon...</h1>

      </main>
      <footer className="p-5 bg-green-500 text-1xl">
        &copy;2023
      </footer>
    </body>
    
    </>
    
  )
}