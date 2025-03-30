import { useState } from 'react'
import { Button } from '../button'
import './style.css'

export function UserInfo(props) {
    const [activeSection, setActiveSection] = useState('Profile')
    const birthday = new Date(props.user.birthday)

    let massOptionsSection = []
    let massOptionsProfile = []
    for (var key in props.user) {
        if (Array.isArray(props.user[key])) {
            massOptionsSection.push(key)
        } else {
            massOptionsProfile.push(key)
        }
    }

    return (
        <>
            <div className='viewUserInfo'>
                <ul className='sections'>
                    <li className={activeSection === 'Profile' ? 'active' : ''} onClick={() => setActiveSection('Profile')}>Profile</li>
                    {massOptionsSection.map((item, i) =>
                        <li className={activeSection === item ? 'active' : ''} onClick={() => setActiveSection(item)} key={i}>{item}</li>
                    )}
                </ul>
                <div className='profile'>
                    {activeSection === 'Profile' ? (
                        <>
                            <div className='profilePicture viewBorder'>
                                <div className='title'>
                                    <p>Profile Picture</p>
                                </div>
                                <img className="profileImage" src={props.user.image} title="" />
                                <p className='viewHelpInfo'>Upload/Change Your Profile Image</p>
                                <Button click="test" title="Upload Avatar" />
                            </div>
                            <div className='profileInfo viewBorder'>
                                <div className='title'>
                                    <p>Edit Account Details</p>
                                </div>
                                <form action="" method="get">
                                    <div className='formElementsGroup'>
                                        <div className='formElement'>
                                            <label>
                                                First name: </label>
                                            <input
                                                type="text"
                                                name="first_name"
                                                defaultValue={props.user.first_name} />
                                        </div>
                                        <div className='formElement'>
                                            <label>
                                                Last name:  </label>
                                            <input
                                                type="text"
                                                name="last_name"
                                                defaultValue={props.user.last_name} />
                                        </div>
                                    </div>
                                    <div className='formElementsGroup'>
                                        <div className='formElement'>
                                            <label>
                                                birthday:     </label>
                                            <input
                                                type="text"
                                                name="birthday"
                                                defaultValue={birthday.getDate() + "/" + (+birthday.getMonth() + +1) + "/" + birthday.getFullYear()} />
                                        </div>
                                        <div className='formElement'>
                                            <label>
                                                gender:
                                            </label>
                                            <input
                                                type="text"
                                                name="gender"
                                                defaultValue={props.user.gender} />
                                        </div>
                                    </div>
                                    <div className='formElementsGroup'>
                                        <div className='formElement'>
                                            <label>
                                                Email:
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                defaultValue={props.user.email} />
                                        </div>
                                    </div>
                                    <div className='formElementsGroup'>
                                        <div className='formElement'>
                                            <label>
                                                company_name:
                                            </label>
                                            <input
                                                type="text"
                                                name="company_name"
                                                defaultValue={props.user.company_name} />
                                        </div>
                                        <div className='formElement'>
                                            <label>
                                                job_title:
                                            </label>
                                            <input
                                                type="text"
                                                name="job_title"
                                                defaultValue={props.user.job_title} />
                                        </div>
                                    </div>
                                    <div className='formButton'>
                                        <Button click="test" title="Change Details" />
                                    </div>
                                </form>
                            </div>
                        </>
                    ) : (
                        <div className='profileInfo viewBorder'>
                            <div className='title'>
                                <p>{activeSection}</p>
                            </div>
                            <form action="" method="get">
                                {
                                    massOptionsSection.includes(activeSection) &&
                                    props.user[activeSection].map((item, i) => {
                                        return (
                                            <div className='informationGroup' key={i}>
                                                <p>{activeSection + ' №' + (i + 1)}</p>
                                                {Object.keys(item).map((key) => {
                                                    return (
                                                        <>
                                                            <div className='formElement'>
                                                                <label>
                                                                    {key}
                                                                </label>
                                                                <input
                                                                    className='inputData'
                                                                    type="text"
                                                                    name={key}
                                                                    value={item[key]}
                                                                    readOnly
                                                                />
                                                            </div>
                                                        </>
                                                    )
                                                })
                                                }
                                            </div>)
                                    })
                                }
                                <div className='formButton'>
                                    <Button click="test" title="Change Details" />
                                </div>
                            </form>
                        </div>
                    )}
                </div >
            </div >
        </>
    )
}