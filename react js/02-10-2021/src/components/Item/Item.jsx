const Item = ({index, todo, removeTodo}) => {
  return (
    <li>
      {todo}
      <span
        onClick={function remove() {
          removeTodo(index);
        }}
      >
        X
      </span>
    </li>
  );
};
export default Item;