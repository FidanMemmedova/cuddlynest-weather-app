import { useState } from "react"
import style from "./SearchBar.module.scss"

const SearchBar = () => {
  const [searchedCity, setSearchedCity] = useState('')
  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setSearchedCity(e.target.value)
  // }
  return (
    <>
      <input placeholder="Search for cities" type="text" className={style.searchBar}/>
    </>
  )
}

export default SearchBar
