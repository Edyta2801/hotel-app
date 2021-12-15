import rooms from "../assets/data/rooms.json"

const apiResults = Object.values(rooms)[0]

export function fetchApiData(inputValue) {
  return apiResults
    .filter((rooms) => {
      return rooms.title.toLowerCase().includes(inputValue.toLowerCase())
    })
    .sort((a, b) => {
      return a.name > b.name
    })
}
