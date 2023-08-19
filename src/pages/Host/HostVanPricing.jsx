import { useOutletContext } from "react-router-dom";

export default function HostVanPricing() {
    const {vanDetails} = useOutletContext();

    return (
        <p className="van-tab-pricing">
            <span>${vanDetails.price}</span>/day
        </p>
    )
}