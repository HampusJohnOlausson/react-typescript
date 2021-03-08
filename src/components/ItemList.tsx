import React, { Component } from 'react'
import Item from './Item'

interface Props{
    
}
interface State {
  name: String;
  price: Number;
  id: Number;
}
export default class ItemList extends Component<{props: Props}> {


    state = {
         database: [
            { name: 'T-shirt', price: 19.99, id: 1}, 
            { name: 'Jeans', price: 39.99, id: 2}, 
            { name: 'Hoodie', price: 29.99, id: 3}
        ]
    }

    render() {
       

        return (
            <div>
                {
                    this.state.database.map(item => (
                        <Item name={item.name} price={item.price} key={item.id} />
                    ))
                }
            </div>
        )
    }
}
