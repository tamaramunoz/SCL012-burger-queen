import React, { Fragment } from 'react'

const UserTable = (props) => {

    

    return ( 
        <Fragment>
            <table>
                <thead>
                    <tr>
                        <th>Food</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                {   props.foodList.length > 0 ?
                        props.foodList.map((product, id) => (
                        <tr key={product.id}>
                            <td>{product.food}</td>
                            <td>{product.price}</td>
                            <td>
                                <button 
                                    className="button muted-button"
                                    onClick={() => {props.deleteProduct(product.id)}}
                                >Delete</button>
                            </td>
                        </tr>
                        )) : (
                            <tr>
                                <td colSpan={3}>No order</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </Fragment>
     );
}
 
export default UserTable;