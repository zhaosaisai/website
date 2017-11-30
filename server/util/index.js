module.exports = {
    isNotEmpty: (object = {}) => {
        let keys = Object.keys(object)
        for(let i = 0; i < keys.length; i++) {
            let value = object[keys[i]]
            if(value === undefined || value === null || value === "") {
                throw new Error(`${keys[i]} cannot be empty!!!`)
                return
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
            throw new Error("Params must be an int")
        }
    }
}