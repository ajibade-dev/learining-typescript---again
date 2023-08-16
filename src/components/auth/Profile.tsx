import React from 'react'

export type ProfileProp = {
    name: string
}

export const Profile = ({name}: ProfileProp) => {
  return (
    <div>Private Profile component nameis {name}</div>
  )
}
