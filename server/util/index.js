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
    }
}