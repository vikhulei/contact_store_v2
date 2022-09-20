import { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import styled from "styled-components"
import { Input } from "../ui/StyledComponents"
import { setSearchValue } from "../../features/contactSlice"

const SearchInput = styled(Input)`
    width: 100%;
    max-width: 100%;
`

const Search = () => {

    const [value, setValue] = useState("")

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setSearchValue(value))
    }, [value])

    return (
        <SearchInput
            type="text"
            placeholder="Start typing..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
        />
    )
}

export default Search