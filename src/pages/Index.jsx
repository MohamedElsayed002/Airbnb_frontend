
import { useEffect , useState } from "react";
import axios from 'axios'
import { Link } from "react-router-dom";
// import Image from "../Image.jsx";


function IndexPage () {
    const [places,setPlaces] = useState([])

    console.log(places)

    useEffect(() =>{
        axios.get('/api/v1/places/allPlaces').then((response) => {
            setPlaces(response.data.places)
        })
    },[])

    return (
        <div className="mt-8 grid gap-x-6 gap-y-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
            {
                places.length > 0 && places.map((place) => (
                    <Link to={`/place/` + place._id}>
                        <div className="bg-gray-500 mb-2 rounded-2xl flex">
                            <div className="bg-gray-500 mb-2 rounded-2xl flex">
                                {place && (
                                    <img className="rounded-2xl object-cover aspect-square" src="https://images.pexels.com/photos/17496706/pexels-photo-17496706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                                )}
                            </div>
                            <h2 className="font-bold">{place.address}</h2>
                            <h3 className="text-sm text-gray-500">{place.title}</h3>
                            <div className="mt-1">
                                <span className="font-bold">${place.price}</span>per night 
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}

export default IndexPage