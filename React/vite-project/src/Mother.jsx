import React from 'react'

const Mother = ({name, surname, age}) => {
  return (
    <div>
        <h1>Mother</h1>
        <p><b>Name: </b>{name}</p>
        <p><b>Surname: </b>{surname}</p>
        <p><b>Age: </b>{age}</p>
    </div>
  )
}

export default Mother