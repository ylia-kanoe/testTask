import data from "../data.json"
import React from "react"
import Link from "react"
import { useParams } from "react-router"
import { UserItem } from "../components/userItem"

export function UserPage() {
    let param = useParams()
    return (

        <>
            <UserItem user={data[param.userId]} />
        </>
    )



}