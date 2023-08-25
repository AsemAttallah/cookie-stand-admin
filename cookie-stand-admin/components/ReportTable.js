import {hourly_sales} from '@/data'
export default function ReportTable({data}){
    // console.log(data)
    return(
      <>
      { data.length > 0 ?(
      <table className="ml-auto mr-auto mb-10 mt-10">
        <thead>
            <tr>
                <th className="border border-black text-center p-3 bg-green-700">Location</th>
                <th className="border border-black text-center p-3 bg-green-700">6am</th>
                <th className="border border-black text-center p-3 bg-green-700">7am</th>
                <th className="border border-black text-center p-3 bg-green-700">8am</th>
                <th className="border border-black text-center p-3 bg-green-700">9am</th>
                <th className="border border-black text-center p-3 bg-green-700">10am</th>
                <th className="border border-black text-center p-3 bg-green-700">11am</th>
                <th className="border border-black text-center p-3 bg-green-700">12pm</th>
                <th className="border border-black text-center p-3 bg-green-700">1pm</th>
                <th className="border border-black text-center p-3 bg-green-700">2pmm</th>
                <th className="border border-black text-center p-3 bg-green-700">3pm</th>
                <th className="border border-black text-center p-3 bg-green-700">4pm</th>
                <th className="border border-black text-center p-3 bg-green-700">5pm</th>
                <th className="border border-black text-center p-3 bg-green-700">6pm</th>
                <th className="border border-black text-center p-3 bg-green-700">7pm</th>
                <th className="border border-black text-center p-3 bg-green-700">Totals</th>
            </tr>
        </thead>
        <tbody>
            {data.map(obj=>(
                <tr key={obj.Location}>
                    <td className="border border-black text-center p-3 bg-green-400">{obj.Location}</td>
                    <td className="border border-black text-center p-3 bg-green-400">{obj.Hourly_sales[0]}</td>
                    <td className="border border-black text-center p-3 bg-green-400">{obj.Hourly_sales[1]}</td>
                    <td className="border border-black text-center p-3 bg-green-400">{obj.Hourly_sales[2]}</td>
                    <td className="border border-black text-center p-3 bg-green-400">{obj.Hourly_sales[3]}</td>
                    <td className="border border-black text-center p-3 bg-green-400">{obj.Hourly_sales[4]}</td>
                    <td className="border border-black text-center p-3 bg-green-400">{obj.Hourly_sales[5]}</td>
                    <td className="border border-black text-center p-3 bg-green-400">{obj.Hourly_sales[6]}</td>
                    <td className="border border-black text-center p-3 bg-green-400">{obj.Hourly_sales[7]}</td>
                    <td className="border border-black text-center p-3 bg-green-400">{obj.Hourly_sales[8]}</td>
                    <td className="border border-black text-center p-3 bg-green-400">{obj.Hourly_sales[9]}</td>
                    <td className="border border-black text-center p-3 bg-green-400">{obj.Hourly_sales[10]}</td>
                    <td className="border border-black text-center p-3 bg-green-400">{obj.Hourly_sales[11]}</td>
                    <td className="border border-black text-center p-3 bg-green-400">{obj.Hourly_sales[12]}</td>
                    <td className="border border-black text-center p-3 bg-green-400">{obj.Hourly_sales[13]}</td>
                    <td className="border border-black text-center p-3 bg-green-400">{obj.Hourly_sales[14]}</td>
                </tr>
            ))}
            <tr>
                <th className="border border-black text-center p-3 bg-green-700">Totals</th>
                <th className="border border-black text-center p-3 bg-green-700">{hourly_sales[0] * data.length}</th>
                <th className="border border-black text-center p-3 bg-green-700">{hourly_sales[1] * data.length}</th>
                <th className="border border-black text-center p-3 bg-green-700">{hourly_sales[2] * data.length}</th>
                <th className="border border-black text-center p-3 bg-green-700">{hourly_sales[3] * data.length}</th>
                <th className="border border-black text-center p-3 bg-green-700">{hourly_sales[4] * data.length}</th>
                <th className="border border-black text-center p-3 bg-green-700">{hourly_sales[5] * data.length}</th>
                <th className="border border-black text-center p-3 bg-green-700">{hourly_sales[6] * data.length}</th>
                <th className="border border-black text-center p-3 bg-green-700">{hourly_sales[7] * data.length}</th>
                <th className="border border-black text-center p-3 bg-green-700">{hourly_sales[8] * data.length}</th>
                <th className="border border-black text-center p-3 bg-green-700">{hourly_sales[9] * data.length}</th>
                <th className="border border-black text-center p-3 bg-green-700">{hourly_sales[10] * data.length}</th>
                <th className="border border-black text-center p-3 bg-green-700">{hourly_sales[11] * data.length}</th>
                <th className="border border-black text-center p-3 bg-green-700">{hourly_sales[12] * data.length}</th>
                <th className="border border-black text-center p-3 bg-green-700">{hourly_sales[13] * data.length}</th>
                <th className="border border-black text-center p-3 bg-green-700">{hourly_sales[14] * data.length}</th>
            </tr>
        </tbody>
      </table>) : <h2 className="text-center text-2xl m-9">No Cookie Stands Available</h2>
      }
      </>
    );
  }