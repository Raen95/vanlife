import { useOutletContext } from "react-router-dom";

export default function HostVanInfo() {
    const {vanDetails} = useOutletContext();

    return (
        <div className="wrapper-van-description">
            <p><span>Name</span>: {vanDetails.name}</p>
            <p><span>Category</span>: {vanDetails.type}</p>
            <p><span>Description</span>: {vanDetails.description}</p>
        </div>
    )
}