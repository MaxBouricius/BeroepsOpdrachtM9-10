import { useEffect } from "react";
import { useState } from "react"
import itemList from "../../Data/itemList"
import Descriptie from "../Descriptie/Descriptie";
import "./Collectie.css";
const Collectie = () => {


    const [items, setItems] = useState(localStorage.getItem("itemList")?JSON.parse(localStorage.getItem("itemList")):itemList);
    const [geselecteerdeItem, setGeselecteerdeItem] = useState({...items[0]});
    const [editing, setEditing] = useState(false);

    const itemClicked = (index) => {
        setGeselecteerdeItem({
            ...items[index]
        })
    }
    return (
        <>
             {/* navbar */}
            <main>
                <section className="leftSide">
                    <div>
                        {/* <button>filters</button>
                        <button>filters</button> */}
                    </div>
                    <img className="" src={geselecteerdeItem.image} alt="geselecteerdeItem" />
                    <Descriptie itemClicked={itemClicked} geselecteerdeItem={geselecteerdeItem} items={items} setGeselecteerdeItem={setGeselecteerdeItem} setItems={setItems} editing={editing} setEditing={setEditing}/>

                </section>

                <div className="itemList">
                    {items.map((item, index) => (
                        <div className="listItem">
                            <img onClick={()=>itemClicked(index)} className="items" key={item.id} src={item.image} alt="items" />
                        </div>
                    ))}
                </div>
            </main>
        </>
    )
}

export default Collectie;