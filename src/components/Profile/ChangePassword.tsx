import React, { useState } from "react"

interface ChangePasswordProps {
    closeWithoutSave: () => void
}

const ChangePassword: React.FC<ChangePasswordProps> = ({closeWithoutSave}) => {
    const [oldPassword, setOldPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [repitPassword, setRepitPassword] = useState('')

    const handleClickClear = () => {
        setNewPassword('')
        setOldPassword('')
        setRepitPassword('')
    }

    

    const handleClickSave = () => {
        // TODO Save updated password and close 
        if (newPassword === repitPassword) {
            alert('Save password')
        } else {
            alert('Enter the same password')
        }

    }

    const handleClickClose = () => {
        closeWithoutSave()
    }
    return (
        <div>
            <label>Old password:
                <input
                    onChange={e => setOldPassword(e.target.value)}
                    value={oldPassword}
                    type="password"
                />
            </label>
            <label>New password:
                <input
                    onChange={e => setNewPassword(e.target.value)}
                    value={newPassword}
                    type="password"
                />
            </label>
            <label>Repit password:
                <input
                    onChange={e => setRepitPassword(e.target.value)}
                    value={repitPassword}
                    type="password"
                />
            </label>
            <button onClick={handleClickSave}>Save and Close</button>
            <button onClick={handleClickClose}>Close without Save</button>
            <button onClick={handleClickClear}>Clear</button>
        </div>
    )
}

export default ChangePassword