import "./Button.css"
const Button = ({ addTodo }) => {
  return <button onClick={addTodo} className="button">Add</button>;
};

export default Button;
