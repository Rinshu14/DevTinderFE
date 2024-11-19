export interface User {
    _id: string,
    firstName: string,
    lastName: string,
    emailId: string,
    age: number
    gender?: string
    skills?: string[]
    theme: string
    photoUrl?: string
    about?: string
}

export interface FeedUser {
    _id: string
    firstName: string
    lastName?: string
    age?: number | undefined
    gender?: string
    skills?: string[]
    photo?: string
    about?: string
}

export interface ConnectionRequestType {

    _id: string
    fromUserId: {
        _id: string
        firstName: string
        lastName: string
        age: number
        about: string
        gender: string
        photoUrl: string

    }
    toUserId: string


}

export interface ConnectionType {

    _id: string
    firstName: string
    lastName: string
    age: number
    gender: string
    about: string
    photoUrl: string

}


export interface UserCardProps {
    _id: string,
    firstName: string,
    lastName?: string,
    age?: number
    gender?: string
    skills?: string[]
    photoUrl?: string
    about?: string
    type: string
}


