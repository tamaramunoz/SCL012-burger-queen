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
                {   props.Products.length > 0 ?
                        props.Products.map((e, id) => (
                        <tr key={e.id}>
                            <td>{e.food}</td>
                            <td>{e.price}</td>
                            <td>
                                <button 
                                    className="button muted-button"
                                    onClick={() => {props.deleteProduct(e.id)}}
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