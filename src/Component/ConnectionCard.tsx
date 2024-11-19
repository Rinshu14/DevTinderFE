import React from 'react'
import { defaultUserImage } from '../Utils/Constants'

const ConnectionCard = ({user}) => {
    const photoUrl=user?.photoUrl
    const {firstName,lastName}=user
    return (
        <div className=" bg-base-300 max-w-2xl shadow-xl  my-5 flex rounded-lg">
           
            <img className={` w-[6rem] rounded-lg `}
                src={(photoUrl) ? photoUrl : defaultUserImage}
                alt="User image"

            />

           
            <div className="card-body overflow-auto max-h-[7rem]  p-[1rem]" >
                <h4 className="card-title leading-3" >{firstName} {lastName}</h4>

            </div>
        </div>

    )
}

export default ConnectionCard