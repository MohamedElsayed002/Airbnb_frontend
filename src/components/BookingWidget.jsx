
import { useEffect, useState } from "react";
import { useAppContext } from "../contenxt/context";
import { differenceInCalendarDays } from "date-fns";

const BookingWidget = ({ place }) => {

    const [checkIn, setCheckIn] = useState('')
    const [checkOut, setSetCheckOut] = useState('')
    const [numberOfGuests, setNumberOfGuests] = useState(1)
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const { name: userName } = useAppContext()

    useEffect(() => {
        if (user) {
            setName(userName)
        }
    }, [userName])


    let numberOfNights = 0
    if (checkIn && checkOut) {
        numberOfNights = differenceInCalendarDays(new Date(checkOut), new Date(checkIn))
    }


    const handleSubmit = () => {
        // post check place booking post
    }



    return (
        <div className="bg-white shadow p-4 rounded-2xl">
            <div className="text-2xl text-center">
                Price: ${place.price} / per night
            </div>
            <div className="border rounded-2xl mt-4">
                <div className="flex">
                    <div className="py-3 px-4">
                        <label>Check in:</label>
                        <input type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} />
                    </div>
                    <div className="py-3 px-4 border-l">
                        <label>Check out:</label>
                        <input type="date" value={checkOut}
                            onChange={ev => setCheckOut(ev.target.value)} />
                    </div>
                </div>
                <div className="py-3 px-4 border-t">
                    <label>Number of guests:</label>
                    <input type="number"
                        value={numberOfGuests}
                        onChange={ev => setNumberOfGuests(ev.target.value)} />
                </div>
                {numberOfGuests > 0 && (
                    <div className="py-3 px-4 border-t">
                        <label>Your full name :</label>
                        <input type="text" value={name} onChange={ev => setName(ev.target.value)}/>
                        <label>Phone number:</label>
                        <input type="tel" value={phone} onChange={ev => setPhone(ev.target.value)} />

                    </div>
                )}
            </div>
            <button onClick={handleSubmit} className="primary mt-4">
                Book this place 
                {numberOfNights > 0 && (
                    <span>${numberOfNights * place.price}</span>
                )}
            </button>
        </div>
    )
}


export default BookingWidget