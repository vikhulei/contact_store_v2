import styled from "styled-components"
import {Input} from "../../../../../components/ui/StyledComponents"

const SearchInput = styled(Input) `
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