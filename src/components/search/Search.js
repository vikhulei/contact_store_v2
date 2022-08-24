import styled from "styled-components"
import {Input} from "../ui/StyledComponents"

const SearchInput = styled(Input) `
    width: 100%;
    max-width: 100%;
`

const Search = () => {
    return (
    <SearchInput
    type="text"
    placeholder="Start typing..."
    />
    )
}

export default Search