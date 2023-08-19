import { useOutletContext } from "react-router-dom";

export default function HostVanPhotos() {
    const {vanDetails} = useOutletContext();

    return (
        <div className="wrapper-van-photos-list">
            <img src={vanDetails.imageUrl} alt="van photo" /> 
        </div>
    )
}   