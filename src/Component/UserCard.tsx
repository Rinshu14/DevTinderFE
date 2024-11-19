import Button from "../CustomComponents/Button"
import { ignored, intrested } from "../Utils/Constants"
import { defaultUserImage } from "../Utils/Constants"
import { reviewUser } from "../Services/RequestsAsync"
import UseAppDispatch from "../Hooks/UseAppDispatch"
import { UserCardProps } from "../Types/User"


type Props = {
    user: UserCardProps
}

const UserCard = ({ user }: Props) => {

    if (!user) return <></>
    const { firstName, lastName, photoUrl, about, age, gender, _id ,type} = user
    const dispatch = UseAppDispatch();

    const handleIgnoreClick = () => {
        dispatch(reviewUser({ status: ignored, userId: _id }))
    }
    const handleIntrestedClick = () => {
        dispatch(reviewUser({ status: intrested, userId: _id }))
    }

    return (
        <div className="card bg-base-300 w-96 shadow-xl  my-5">
            <figure>
                <img className={`h-[14rem] w-[100%] `}
                    src={(photoUrl) ? photoUrl : defaultUserImage}
                    alt="User image"
                />
            </figure>
            <div className="card-body overflow-auto max-h-[15rem] w-full p-[1rem]" >
                <h4 className="card-title leading-3" >{firstName} {lastName}</h4>
                <span >{age} , {gender}</span>
                <span className={` block leading-5 break-words  max-h-[6rem] w-full overflow-auto  `} >{about}</span>
               {(type=="feed") && <div className="card-actions justify-center flex">
                    <Button text={ignored} category="primary" onClick={handleIgnoreClick}></Button>
                    <Button text={intrested} category="secondary" onClick={handleIntrestedClick}></Button>
                </div>}
            </div>
        </div>
    )
}

export default UserCard
