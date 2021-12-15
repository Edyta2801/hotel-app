import React, { useContext } from "react"
import Room from "../Room"
import "../../sass/rooms.scss"
import { SearchContext } from "../RoomsSearch"




function Rooms() {
  // const [value, setValue] = useState("")
  // const handleChange = (event) => {
  //   setSearchTerm(event.target.value)
  // }

  // const data = Object.values(rooms)[0]

  // const handleSearchText = (text) => {
  //   setValue(value)
  // }
  

  const context = useContext(SearchContext)
  
  
  function createCards() {

    return context.results.length > 0 ? (
      context.results.map((result) => {
        return (
          <ul>
            <Room
              key={result.id}
              title={result.title}
              price={result.price}
              size={result.size}
            />
          </ul>
        )
      })
    ) : (
      <p className="SearchResults__empty">No matching results...</p>
    )
  }

  return <div className="SearchResults">{createCards()}</div>
}
//   return (
//     <div>
//       {data
//         .filter((item) => {
//           if (!value) return true
//           if (item.title.toLowerCase().includes(value)) {
//             return true
//           }
//           return false
//         })

//         .map((item) => (
//           <ul>
//             <Room
//               key={item.id}
//               title={item.title}
//               price={item.price}
//               size={item.size}
//             />
//           </ul>
//         ))}
//     </div>
//   )
// }

export default Rooms
