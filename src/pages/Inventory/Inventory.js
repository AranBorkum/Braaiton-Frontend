import {useEffect, useState} from "react";
import {HTTPClient} from "../../services/http";
import InventoryBlock, {InventoryBlockInterface} from "../../components/Inventory-Block";
import {Switch} from "@mui/material";
import TopNavigationBar from "../../components/TopNavigationBar";

function Inventory() {

    const [items, setItems] = useState([]);
    const [switchState, setSwitchState] = useState(false)

    useEffect(() => {
        HTTPClient.get("/inventory/get-available-models/")
            .then((res) => {
                let tempItems = [];
                for (let item in res.data) {
                    tempItems.push(new InventoryBlockInterface(
                        res.data[item].id,
                        res.data[item].name,
                        res.data[item].description,
                        res.data[item].cost_per_hour,
                        res.data[item].state,
                    ))
                }
                setItems(tempItems);
            })
            .catch((err) => {console.log(err)})
    }, []);

    function handleSwitch() {
        setSwitchState(!switchState)
    }

    const arrayDataItems = items.map((item) => <InventoryBlock inventoryBlockInterface={item} />)

    return (
        <>
            <TopNavigationBar/>
            <h1>Inventory</h1>
            <Switch checked={switchState} onChange={handleSwitch} />
            {arrayDataItems}
        </>
    )
}

export default Inventory;