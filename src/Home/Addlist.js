import React,{useRef} from "react";

const AddList = ({setList}) => {
    const nameRef = useRef()
    const priceRef = useRef()

    function handleSubmit(event) {
        event.preventDefault();
        const name = event.target.elements.name.value;
        const price = event.target.elements.price.value;
        const newlist = {
            id: 3,
            name,
            price
        }
        setList((prevList)=> {
            return prevList.concat(newlist)
        })
        nameRef.current.value = ""
        priceRef.current.value = ""
    }

    return(
        <form className='addForm' onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Enter Name" ref={nameRef}/>
            <input type="text" name="price" placeholder="Enter Price" ref={priceRef} className="price"/>
            <button type="submit">Add</button>
        </form>
    )
}
export default AddList;