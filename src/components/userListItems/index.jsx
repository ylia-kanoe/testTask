import { useState } from "react"
import { UserListItem } from "../userListItem"
import { Pagination } from "../pagination"
import { Breadcrumbs } from "../breadcrumbs"
import { Search } from "../search"
import './style.css'

export function UserListItems(props) {
	const [data, setData] = useState(props.users)
	const [countItems, setCountItems] = useState(20)
	const [startItems, setStartItems] = useState(0)
	const [numPage, setNumPage] = useState(0)
	const [prevFilterParam, setPrevFilterParam] = useState({ param: '', direction: 'asc' })
	const filterParam = { param: '', direction: 'asc' }

	function paginationPage(i) {
		setStartItems(i * countItems)
		setNumPage(i)
	}

	function getCountItems(i) {
		setCountItems(i)
	}

	function sortUsers(param) {
		setPrevFilterParam(filterParam)
		filterParam.param = param
		if (prevFilterParam.direction === filterParam.direction) {
			if (prevFilterParam.direction === 'asc') {
				filterParam.direction = 'desc'
			} else {
				filterParam.direction = 'asc'
			}
		}

		let sortedData = []

		sortedData = data.slice().sort((a, b) => {
			if (filterParam.direction === 'desc') {
				if (["last_name", "company_name", "job_title"].includes(param)) {
					return a[param].localeCompare(b[param])
				} else if (param === 'id') {
					return b[param] - a[param]
				} else if (param === 'age') {
					return ((new Date().getTime() - new Date(b.birthday)) / (24 * 3600 * 365.25 * 1000)).toFixed() - ((new Date().getTime() - new Date(a.birthday)) / (24 * 3600 * 365.25 * 1000)).toFixed()
				} else if (param === 'birthday') {
					return (new Date(b.birthday).getFullYear()) - (new Date(a.birthday).getFullYear())
				}
			} else {
				if (["last_name", "company_name", "job_title"].includes(param)) {
					return b[param].localeCompare(a[param])
				} else if (param === 'id') {
					return a[param] - b[param]
				} else if (param === 'age') {
					return ((new Date().getTime() - new Date(a.birthday)) / (24 * 3600 * 365.25 * 1000)).toFixed() - ((new Date().getTime() - new Date(b.birthday)) / (24 * 3600 * 365.25 * 1000)).toFixed()
				} else if (param === 'birthday') {
					return (new Date(a.birthday)) - (new Date(b.birthday))
				}
			}
		})
		setData(sortedData)
	}

	function findUsers(param) {
		if (param === '') {
			setData(props.users)
			return
		}

		let findName = param[0].toUpperCase() + param.slice(1)
		setData(props.users.filter(item => item.first_name.includes(findName)))
	}

	return (
		<>
			<div className='container'>
				<div className='userListItemsTop'>
					<Breadcrumbs />
					<Search findUsers={findUsers} />
				</div>
			</div>
			<div className='container'>
				<div className='userListItems'>
					<table className='tableUsers'>
						<thead>
							<tr>
								<th onClick={() => sortUsers('id')}>ID</th>
								<th onClick={() => sortUsers('last_name')}>User Profile</th>
								<th onClick={() => sortUsers('age')}>Age</th>
								<th onClick={() => sortUsers('birthday')}>Birthday {'⮝'}</th>
								<th onClick={() => sortUsers('company_name')}>Company</th>
								<th onClick={() => sortUsers('job_title')}>Job title</th>
								<th colSpan="2">Всего пользователей: {data.length}</th>
							</tr>
						</thead>
						<tbody>
							{data.map((item, i) => {
								if (startItems <= i &&
									i < (startItems + countItems)) {
									return <UserListItem user={item} key={item.id} />
								}
							}
							)}
						</tbody>
					</table>
					<div>
						{countItems < data.length &&
							<Pagination length={data.length} countItemPage={countItems} numPage={numPage} click={paginationPage} setCount={getCountItems} />
						}
					</div>
				</div>
			</div>
		</>
	)
}
