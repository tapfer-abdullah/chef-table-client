import { useEffect } from "react"

const useTitle = (title) =>{

    useEffect(()=>{

        document.title = `${title} - The Chef's Table`;

    } ,[title])
}

export default useTitle;