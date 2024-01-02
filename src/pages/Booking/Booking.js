import {useEffect, useState} from "react";
import {HTTPClient} from "../../services/http";
import TopNavigationBar from "../../components/TopNavigationBar";
import InventoryBlock, {InventoryBlockInterface} from "../../components/Inventory-Block";
import {BookingBlock, BookingBlockInterface} from "../../components/Booking-Block";

function Booking() {
    const [bookings, setBookings] = useState([])

    useEffect(() => {
        HTTPClient.get("/booking/active-bookings/")
            .then((res) => {
                let tempBookings = [];
                for (let booking in res.data) {
                    console.log(res.data[booking].stage)
                    tempBookings.push(new BookingBlockInterface(
                        res.data[booking].id,
                        res.data[booking].stage,
                    ))
                }
                setBookings(tempBookings);
            })
            .catch((err) => console.log(err))
    }, [])

    const arrayDataItems = bookings.map((booking) => <BookingBlock bookingBlockInterface={booking} />)

    return (
        <>
            <TopNavigationBar />
            {arrayDataItems}
        </>
    )
}

export default Booking;