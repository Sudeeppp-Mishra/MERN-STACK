import App from "./App"

const Address = ({country, city, province})=>{
    return <div>
        <h1>Address</h1>
        <p><b>Country: </b>{country}</p>
        <p><b>City: </b>{city}</p>
        <p><b>Province: </b>{province}</p>
    </div>
}

export default Address

// make tag with name Address