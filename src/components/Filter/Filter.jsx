import { useDispatch, useSelector } from 'react-redux';
import { getFilterValue } from 'store/filterSlice';
import { FilterWrapper,  Input } from './Filter.styled';
import { selectFilter } from 'store/selectors';

export const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(selectFilter);
    return (
        <FilterWrapper>
          <Input
          id="filter"
          type="text"
          name="filter"
          value={filter}
          onInput={(event) => dispatch(getFilterValue(event.target.value))}
          placeholder="Find contacts by name"
        />
        </FilterWrapper>
    )
}

