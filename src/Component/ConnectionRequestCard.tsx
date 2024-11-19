import UseAppDispatch from "../Hooks/UseAppDispatch";
import { accept, reject, defaultUserImage } from "../Utils/Constants";
import Button from "../CustomComponents/Button";
import { reviewConnectionRequest } from "../Services/ConnectionAsync"
import { ConnectionRequestType } from "../Types/User";

type ConnectionRequestCardProps={
    request:ConnectionRequestType
}

const ConnectionRequestCard = ({ request }: ConnectionRequestCardProps ) => {

    
    // if (!user) return <></>

   

    const { firstName, lastName, about, age, gender, photoUrl } = request.fromUserId
    const dispatch = UseAppDispatch();
    const handleRejectClick = () => {
        dispatch(reviewConnectionRequest({ status: reject, reqId: request?._id }))
    }
    const handleAcceptedClick = () => {
        dispatch(reviewConnectionRequest({ status: accept, reqId: request?._id }))
    }


    return (
        <div className=" bg-base-300 min-w-[35rem] max-w-2xl shadow-xl  my-5 flex rounded-lg">
            {/* <figure> */}
            <img className={` w-[9rem] rounded-lg `}
                src={(photoUrl) ? photoUrl : defaultUserImage}
                alt="User image"

            />

            {/* </figure> */}
            <div className="card-body overflow-auto max-h-[13rem]  p-[1rem]" >
                <h4 className="card-title leading-3" >{firstName} {lastName}</h4>
                <span >{age} , {gender}</span>
                <span className={` block leading-5 break-words  max-h-[2.7rem] w-full overflow-auto  `} >{about}</span>
                <div className="card-actions justify-end flex">

                    <Button text={accept} category="primary" onClick={handleAcceptedClick}></Button>
                    <Button text={reject} category="secondary" onClick={handleRejectClick}></Button>

                </div>
            </div>
        </div>
    )
}

export default ConnectionRequestCard