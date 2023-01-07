import { useState } from "react"
import {itemList} from "../../Data/itemList"
const Collectie = () =>{

    
    const [items, setItems] = useState();
    const [selectedItemPicture, setSelectedItemPicture] = useState();
    const [itemDescriptions, setItemDescriptions] = useState();
    
    return(
        <>
            {/* navbar */}
            <main>
                <section>
                    <div>
                        {/* <button>filters</button>
                        <button>filters</button> */}
                    </div>
                    <img className="" src={selectedItemPicture} alt="selectedItemPicture" />
                </section>
                {items}
                {itemDescriptions}
            </main>
        </>
    )
}

export default Collectie;