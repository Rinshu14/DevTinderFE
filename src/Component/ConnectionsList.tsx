
import { useEffect } from 'react'
import UseAppDispatch from '../Hooks/UseAppDispatch'
import UseAppSelector from '../Hooks/UseAppSelector'
import ConnectionCard from './ConnectionCard'
import { fetchConnections } from "../Services/ConnectionAsync"

const ConnectionsList = () => {

    const dispatch = UseAppDispatch()
    const Connections = UseAppSelector((state) => state.Connections)
console.log(Connections)

    useEffect(() => {
        dispatch(fetchConnections())
    }, [])
    if (Connections.length == 0) return <></>
    return (
        <div className=" w-[48rem] m-auto">
            connections
            {Connections.map((user) => {
                return <ConnectionCard key={user._id} user={user} />
            })}
        </div>
    )
}

export default ConnectionsList