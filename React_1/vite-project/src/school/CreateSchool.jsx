import React, { useState } from 'react'

const CreateSchool = () => {

  let [name, setName] = useState("")
  let [address, setAddress] = useState("")
  let [email, setEmail] = useState("")
  let [noofrooms, setnoOfRooms] = useState("")
  let [phone, setPhone] = useState("")

  const handleSubmit= (e)=>{
    e.preventDefault()
    let data = {
      name: name, 
      address: address,
      email: email,
      noofrooms: noofrooms,
      phone: phone
    }
    console.log(data)
  }
  return (
    <div>
      <form onSubmit = {handleSubmit}>
            <div>
                <div>
                    <label htmlFor='name'>Name: </label>
                    <input id="name" value = {name} type="text" onChange={(e)=>{
                        setName(e.target.value)
                    }
                    }></input>
                </div>

                <div>
                    <label htmlFor='address'>Address: </label>
                    <input id='address' type="text" value={address} onChange={(e)=>{
                        setAddress(e.target.value)
                    }}></input>
                </div>

                <div>
                    <label htmlFor='email'>Email: </label>
                    <input id='email' type="email" value={email} onChange={(e)=>{
                        setEmail(e.target.value)
                    }}></input>
                </div>

                <div>
                    <label htmlFor='phone'>Phone: </label>
                    <input id='phone' type="number" value = {phone} onChange={(e)=>{
                        setPhone(e.target.value)
                    }
                    }></input>
                </div>

                <div>
                    <label htmlFor='noofrooms'>noOfRooms: </label>
                    <input id='noofrooms' type="number" value={noofrooms} onChange={(e)=>
                    {
                        setnoOfRooms(e.target.value)
                    }}></input>
                </div>
            </div>

            <div>
                <button>Create</button>
            </div>
        </form>
    </div>
  )
}

export default CreateSchool