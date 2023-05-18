import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Spinner() {
    return (
        <div className="flex w-full  justify-center items-center">
            <FontAwesomeIcon icon={faSpinner} spin />
        </div>
    )
}