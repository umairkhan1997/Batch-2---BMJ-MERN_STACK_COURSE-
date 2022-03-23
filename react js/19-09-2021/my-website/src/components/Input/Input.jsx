import "./input.css";

const Input = ({ onInputChange, value }) => {
  return <input 
    placeholder="Add Todo" 
    onChange={onInputChange}
    className="input"
    value={value}
    />;
};

export default Input;
