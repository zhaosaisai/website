export const formatApi = (api, options) => {
    return api.replace(/(:[^/]+)/g, (...args) => {
        let key = typeof args[1] === 'string' ? args[1].slice(1) : ""
        return options[key]
    })
}

export const formatDate = (date) => {
    const d = new Date(date)
    return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`
}