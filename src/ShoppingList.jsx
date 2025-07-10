function ShoppingList({items}){
    return(
        <>
        <ul>
            {items.map(item=><li key={item.id} style={{color: item.completed?"green":"red"}}>{item.items} - {item.quantity}</li>)}
        </ul>

        </>
    )

}

export default ShoppingList;