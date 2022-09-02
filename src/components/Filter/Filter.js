import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSearchParams } from 'react-router-dom';
import css from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter';

export default function Filter() {
  const dispatch = useDispatch();
  const value = useSelector(state => state.filter.value);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setSearchParams({ filter: value });
  }, [value, setSearchParams]);
  const onFilter = e => {
    dispatch(setFilter(e.currentTarget.value));
  };
  return (
    <>
      Find contacts by name
      <input
        className={css.input}
        type="text"
        value={value}
        onChange={onFilter}
      />
    </>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
};
