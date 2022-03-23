import Item from "../Item/Item";
const List = ({todos, removeTodo, markAsComplete }) => {
    const items = todos.map((todo, index) => {
        return <Item 
          key={index} 
          index={index} 
          todo={todo} 
          removeTodo={removeTodo}
          markAsComplete={markAsComplete}
          />;
      });
    return <div>{items}</div>
}

export default List;