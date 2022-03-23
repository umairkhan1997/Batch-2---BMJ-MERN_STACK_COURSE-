export const ADD_TODO = 'ADD';
// async
// sync

export const addTodo = (payload) => {
    return (dispatch) => {

        const url = 'https://api.github.com/users/MohammadArsalan';

        fetch(url)
        .then((res) => res.json())
        .then((res) => {
            dispatch({
                    type: ADD_TODO,
                    payload: res
                })
        })
        // dispatch({
        //     type: ADD_TODO,
        //     payload: "BEFORE TODO"
        // })
        // setTimeout(() => {
        //     dispatch({
        //         type: ADD_TODO,
        //         payload
        //     })

        // }, 10000)
    }

    // return setTimeout(() => {
    //     return {
    //         type: ADD_TODO,
    //         payload
    //     }
    // }, 2000)
}

export const addTodo2 = (payload) => {
    return {
        type: ADD_TODO,
        payload
    }
}