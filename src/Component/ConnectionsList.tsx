
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
        // <div className=" w-[48rem] m-auto">
        <div>
            <h1 className="text-3xl font-bold">The Cool People You Know!</h1>
            {Connections.map((user) => {
                // return <></>
                 return <ConnectionCard key={user._id} user={user} />
            })}
            </div>
        // </div>
    )
}

export default ConnectionsList