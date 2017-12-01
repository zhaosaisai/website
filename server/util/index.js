module.exports = {
    isNotEmpty: (object = {}, ctx) => {
        let keys = Object.keys(object)
        for(let i = 0; i < keys.length; i++) {
            let value = object[keys[i]]
            if(value === undefined || value === null || value === "") {
                const error = new Error(`${keys[i]} cannot be empty!!!`)
                error.status = 400
                throw error
            }
        }
    },
    selectRequiredFields: (prevData, data) => {
        let prev = Object.assign({}, prevData)
        Object.keys(prev).forEach(key => {
            prev[key] = data[key] || null
        })
        return prev
    },
    isInt: (num) => {
        if (!(parseInt(num) === Number(num))) {
            const error = new Error("Params must be an int")
            error.status = 400
            throw error
        }
    }
}