import { useEffect } from "react";

const useTitle = (title) => {
    console.log(title)
    useEffect(() => {
        console.log("title update")
        document.title = title
    }, [title])

    const setTitle = (title) => {
        document.title = title;
    }

    return setTitle
}

export default useTitle;