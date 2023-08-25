export default function Footer({data}){
    return(
      <footer className="p-5 bg-green-500 text-2xl mt-32 bottom-0 w-full">
        { data.length > 1 ?(
        <h1>{data.length} Locations World Wide </h1>):<h1>{data.length} Location World Wide </h1>}
      </footer>
    )
  }