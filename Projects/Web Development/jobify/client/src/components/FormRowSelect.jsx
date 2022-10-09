const FormRowSelect = ({labelText,name,value, handleChange, list}) => {
  return (
    <div className="form-row">
      <label htmlFor="jobType" className="form-label">
        {labelText || name}
      </label>
      <select
        name={name}
        value={value}
        onChange={handleChange}
        className="form-select"
      >
        {list.map((itemValue, index) => {
          return (
            <option key={index} value={itemValue}>
              {itemValue}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default FormRowSelect;
