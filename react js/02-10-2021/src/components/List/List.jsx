import Item from "../Item/Item";
const List = ({todos, removeTodo}) => {
    const items = todos.map((todo, index) => {
        return <Item key={index} index={index} todo={todo} removeTodo={removeTodo}/>;
      });
    return <ul>{items}</ul>
}

export default List;