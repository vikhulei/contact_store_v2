import styled from "styled-components"
import {Input} from "../ui/StyledComponents"

const SearchInput = styled(Input) `
    max-width: 100%;
    @media screen and (min-width: 1000px) {
        display: none;
    }
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