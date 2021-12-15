import React, { useState, useEffect } from "react"
import RoomsPage from "../../routes/pages/RoomsPage"

import { fetchApiData } from "../utils"

export const SearchContext = React.createContext()

function RoomsSearch() {
  const [inputValue, setInputValue] = useState("")
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    const filteredResults = fetchApiData(inputValue)
    setSearchResults(filteredResults)
  }, [inputValue])

  return (
    <div className="SearchPage">
      <SearchContext.Provider
        value={{
          results: searchResults,
          setInputValue: setInputValue,
        }}
      >
        <RoomsPage />
      </SearchContext.Provider>
    </div>
  )
}

export default RoomsSearch
