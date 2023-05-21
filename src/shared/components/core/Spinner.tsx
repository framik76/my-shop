import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

export function Spinner() {
    const [show, setShow] = useState(false);
  
    useEffect(() => {
        const debounce = setTimeout(() => {
        setShow(true);
        }, 300);
        
        return () => clearTimeout(debounce)
    }, [setShow]);

    return show ?
        <div className="flex w-full  justify-center items-center">
            <FontAwesomeIcon icon={faSpinner} spin />
        </div> : null
}