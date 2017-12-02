import axios from 'axios'

axios.interceptors.response.use(response => {
    if(response.status >= 200 && response.status < 300) {
        let data = response.data
        if(data.status && data.status.status_code !== 0) {
            return {
                error: true,
                errorMsg: data.status.status_reason
            }
        }else {
            return data.result
        }
    }
})

export default axios