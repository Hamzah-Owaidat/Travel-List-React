export default function Item({item, onDeleteItem, onPackedItem}){

    return <li>
      <input type="checkbox" value={item.packed} onChange={() => onPackedItem(item.id)}/>
      <span style={item.packed ? {textDecoration: "line-through"} : {}}>
        {item.quantity} {item.description}
      </span>
      {/* {
        item.packed ? 
          <s><span>{item.quantity} {item.description}</span></s> : 
          <span>{item.quantity} {item.description}</span>         
      } */}
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  }