/*
Task:
- name
- address
- phone
- email
- no. of Rooms
*/

import { model, Schema } from "mongoose";

let schoolSchema = Schema({
    name: {
        type: String,
        required: [true, "Name is required!"]
    },
    address: {
        type: String,
        required: [true, "Address is required!"]
    },
    phone: {
        type: Number
    },
    email: {
        type: String
    },
    noOfRooms: {
        type: String
    }
})

let School = model("School", schoolSchema);
export default School;