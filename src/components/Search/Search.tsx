import React, {Dispatch, FC} from 'react';
import {SearchContainer, SearchLabel, SearchInput} from './Search.elements'

type Props = {
    setFilter: Dispatch<string>
}
const Search : FC<Props> = ({setFilter}) => {

    return (
        <SearchContainer>
            <SearchLabel className={'form-label'}>Фильтр</SearchLabel>
            <SearchInput className={'form-control'} id={'searchInput'} onChange={(e) => setFilter(e.currentTarget.value.toLowerCase())}/>
        </SearchContainer>
    );
};

export default Search;