import React, { useState } from "react";
import Data from "./data";

const Crud = () => {

    const [lists, setLists] = useState(Data)

    return(
        <div>
            <div>
           <AddLists setLists = {setLists} /> 
            <table>
                {
                    lists.map((current) => (
                        <tr>
                            <td>{current.name}</td>
                            <td>{current.price}</td>
                            <td>
                                <button className="edit">Edit</button>
                                <button className="delete">Delete</button>
                            </td>
                        </tr>
                    ))
                }
            </table>
            </div>
        </div>
    );
}

    const AddLists = ({setLists}) => {

        const handleSubmit = (e) => {
            e.preventDefault()
            const name = e.target.elements.name.value;
            const price = e.target.elements.price.value;
            const newList = {
                id: 3,
                name,
                price
            }
            setLists((prevList) => {
                return prevList.concat(newList)
            })
        }
    
        return(
            <form className="addForm" onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Enter Name" />
                <input type="text" name="price" placeholder="Enter Price" className="inputPrice" />
                <button type="submit">Add</button>
            </form>
        );
    }
export default Crud;