import { useEffect } from "react";
import { useState } from "react"
import itemList from "../../Data/itemList"
import Descriptie from "../Descriptie/Descriptie";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./Collectie.css";
const Collectie = () => {


    const [items, setItems] = useState(localStorage.getItem("itemList") ? JSON.parse(localStorage.getItem("itemList")) : itemList);
    const [geselecteerdeItem, setGeselecteerdeItem] = useState({ ...items[0] });
    const [editing, setEditing] = useState(false);

    const itemClicked = (index) => {
        setGeselecteerdeItem({
            ...items[index]
        })
    }
    return (
        <>
            <Navbar/>
            <main className="collectionPage">
                <section className="leftSide">
                    <div className="imageWrapper"><img className="displayImage" src={geselecteerdeItem.image} alt="geselecteerdeItem" /></div>
                    <Descriptie itemClicked={itemClicked} geselecteerdeItem={geselecteerdeItem} items={items} setGeselecteerdeItem={setGeselecteerdeItem} setItems={setItems} editing={editing} setEditing={setEditing} />
                </section>
                <section className="rightSide">
                    <div className="itemList">
                        {items.map((item, index) => (
                            <div className="listItem">
                                <img onClick={() => itemClicked(index)} key={item.id} src={item.image} alt="items" />
                            </div>
                        ))}
                    </div>
                </section>

            </main>
            <Footer/>
        </>
    )
}

export default Collectie;