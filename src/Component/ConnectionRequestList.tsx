
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
        <div className=" w-[48rem] m-auto">
            {PendingConnectionRequest.map((user) => {
                return <ConnectionRequestCard key={user._id} request={user} />
            })}
        </div>
    )
}

export default ConnectionRequestList