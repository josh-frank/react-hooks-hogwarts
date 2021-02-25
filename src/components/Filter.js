function Filter( { filter, updateFilter } ) {

    function toggleGreased( greasedCheckboxEvent ) {
        const updatedFilter = { ...filter };
        updatedFilter.greased = greasedCheckboxEvent.target.checked;
        updateFilter( updatedFilter );
    }

    function toggleSort( sortChangeEvent ) {
        const updatedFilter = { ...filter };
        updatedFilter.sort = sortChangeEvent.target.value;
        updateFilter( updatedFilter );
    }

    return (
        <form>
            <input type="checkbox" name="greased" onChange={ toggleGreased }/>
            <label htmlFor="greased"> Filter greased hogs</label> |
            <label htmlFor="sort"> Sort hogs: </label>
            <select name="sort" onChange={ toggleSort }>
                <option value="none">n/a</option>
                <option value="name">By Name</option>
                <option value="weight">By Weight</option>
            </select>
        </form>
    );

}

export default Filter;