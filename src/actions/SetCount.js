

function SetCount(count) {
    return {
        type : "SETCOUNT",
        payload : count
    }
}

export default SetCount;