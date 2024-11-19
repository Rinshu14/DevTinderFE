
import { useEffect } from 'react'
import UseAppDispatch from '../Hooks/UseAppDispatch'
import UseAppSelector from '../Hooks/UseAppSelector'
import ConnectionRequestCard from './ConnectionRequestCard'
import { fetchConnectionRequest } from "../Services/ConnectionAsync"

const ConnectionRequestList = () => {

    const dispatch = UseAppDispatch()
    const PendingConnectionRequest = UseAppSelector((state) => state.PendingConnectionRequest)


    useEffect(() => {
        dispatch(fetchConnectionRequest())
    }, [])

    if (PendingConnectionRequest.length == 0) return <></>
    return (
        <div className=" ">
           <h1 className="text-3xl font-bold">Let’s Give This a Quick Look!</h1>
            {PendingConnectionRequest.map((request) => {
                return <ConnectionRequestCard key={request._id} request={request}  />
            })}
        </div>
    )
}

export default ConnectionRequestList