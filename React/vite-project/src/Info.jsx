import React from 'react'

const Info = ({name, surname, ward}) => {
  return (
    <div>
        <h1>Info</h1>
        <p><b>Name: </b> {name}</p>
        <p><b>Surname: </b>{surname}</p>
        <p><b>Ward: </b>{ward}</p>
    </div>
  )
}

export default Info