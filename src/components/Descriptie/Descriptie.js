import React, { useState } from 'react'
import itemList from '../../Data/itemList';
import "./Descriptie.css";
const Descriptie = (props) => {
    const { editing, setEditing, setItems, itemClicked,setGeselecteerdeItem, geselecteerdeItem,items} = props;
    const [editedDescriptie, setEditedDescriptie] = useState(geselecteerdeItem);
    const opslaan = (keyPressEvent) => {
        let itemCopy = [...itemList]
        let index = itemCopy.findIndex(i => i.id === editedDescriptie.id)
        itemCopy.splice(index, 1, editedDescriptie);
        localStorage.setItem("itemList", JSON.stringify(itemCopy));
        setItems(JSON.parse(localStorage.getItem("itemList")));
        setEditing(false);
        itemClicked(items.findIndex(i => i.id === editedDescriptie.id));
    }
    if (editing) {
        return (
            <div>
                <button className='editButton' onClick={() => setEditing(!editing)}>Edit</button>
                <div>
                    <input onKeyUp={(keyPressEvent) => setEditedDescriptie({ ...geselecteerdeItem, titel: keyPressEvent.target.value })} type="text" defaultValue={geselecteerdeItem.titel} />
                    <input onKeyUp={(keyPressEvent) => setEditedDescriptie({ ...geselecteerdeItem, omschrijving: keyPressEvent.target.value })} type="text" defaultValue={geselecteerdeItem.omschrijving} />
                    <input onKeyUp={(keyPressEvent) => setEditedDescriptie({ ...geselecteerdeItem, andereInformatie: keyPressEvent.target.value })} type="text" defaultValue={geselecteerdeItem.andereInformatie} />
                </div>
                <button onClick={opslaan}>Opslaan</button>
            </div>
        )
    }
    return (
        <div>
            <button className='editButton' onClick={() => setEditing(!editing)}>Edit</button>
            <div className='descriptie'>
                <h2>{geselecteerdeItem.titel}</h2>
                <p>{geselecteerdeItem.omschrijving}</p>
                <p>{geselecteerdeItem.andereInformatie}</p>
            </div>
        </div>
    )


}


export default Descriptie

