import React from 'react'

const Mother = ({name, surname, age, children}) => { // children is used for calling the things we write inside <Mother>...</Mother> in main App
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