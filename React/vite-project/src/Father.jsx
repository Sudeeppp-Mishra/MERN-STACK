import React from 'react'

const Father = ({name, surname, age}) => { // Father component (user defined tags in react)
  return (
    <div>
        <h1>Father</h1>
        <p><b>Name: </b>{name}</p>
        <p><b>Surname: </b>{surname}</p>
        <p><b>Age: </b>{age}</p>
    </div>
  )
}

export default Father