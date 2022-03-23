const Item = ({index, todo, removeTodo, markAsComplete}) => {

  const completedStyle = { textDecoration: "line-through" }
  const style = {}
  return (
    <p style={ todo.isCompleted ? completedStyle : style}>
      <span style={{ color: 'lightgray' ,marginLeft: 20, marginRight: 20}}>{index  + 1}</span>
      <span onClick={() => { markAsComplete(index)}}>{todo.text}</span>
      <span
        onClick={function remove() {
          removeTodo(index);
        }}
      >
        X
      </span>
    </p>
  );
};
export default Item;