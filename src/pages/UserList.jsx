import data from "../data.json"
import React from "react"
import { UserListItems } from "../components/userListItems"
import { Breadcrumbs } from "../components/breadcrumbs"

export function UserList() {

  return (
    <>
      <UserListItems users={data} />
    </>)
}