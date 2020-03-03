import React, { Fragment } from 'react'
import { useForm } from 'react-hook-form'

const AddProductForm = (props) => {

    const {register, errors, handleSubmit} = useForm();

    const onSubmit = (data, e) => {
        // console.log(data)
        props.addFood(data)
        e.target.reset()
    }

    return ( 
        <Fragment>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Food</label>
                <input type="text" name="food" ref={
                    register({
                        required: {value:true, message: 'Campo requerido'}
                    })
                }/>
                <span>
                    {errors?.food?.message}
                </span>
                <label>Price</label>
                <input type="text" name="price" ref={
                    register({
                        required: {value:true, message: 'Campo requerido'}
                    })
                }/>
                <span>
                    {errors?.price?.message}
                </span>
                <button>add product</button>
            </form>
        </Fragment>
     );
}
 
export default AddProductForm;