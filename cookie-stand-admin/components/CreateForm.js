export default function CreateForm(props) {
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