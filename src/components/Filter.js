function Filter( { filter, updateFilter } ) {

    function toggleGreased( greasedCheckboxEvent ) {
        const updatedFilter = { ...filter };
        updatedFilter.greased = greasedCheckboxEvent.target.checked;
        updateFilter( updatedFilter );
    }

    return (
        <div>
            <input type="checkbox" name="greased" onChange={ toggleGreased }/>
            <label htmlfor="greased"> Filter greased hogs</label>
        </div>
    );

}

export default Filter;