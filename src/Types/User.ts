export interface User  {
    userId: string,
    firstName: string,
    lastName: string,
    emailId: string,
    age?: number
    gender?: string
    skills?: string[]
    theme?: string
    photo?: string
    about?: string
}

export interface FeedUser {
    _id: string
    firstName: string
    lastName?: string
    age?: number
    gender?: string
    skills?: string[]
    photo?: string
    about?: string
}

export interface ConnectionRequestType{
    _id:string
    fromUserId:{
        firstName:string
        lastName:string
        age:number
        skills:string[]
        about:string
        gender:string
        photoUrl:string
    }
    toUserId:string
}

export interface ConnectionType{
    _id:string
    firstName:string
    lastName:string
}