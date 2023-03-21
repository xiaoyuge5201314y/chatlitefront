import axios, {Axios, AxiosRequestConfig, Method} from 'axios'

const http = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    // 请求超时时间
    timeout: 10000,
    headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest"
    },
})

http.interceptors.request.use(async (config) => {
    config.headers.set("userId","1")
    return config
})
http.interceptors.response.use(async (response) => {
    const $config = response.config;
    return response.data;
}, err => {
    return Promise.reject(err);
})


function request(
    method: Method,
    url: string,
    param?: AxiosRequestConfig,
): Promise<any> {
    const config = {
        method,
        url,
        ...param,
    }

    // 单独处理自定义请求/响应回掉
    return new Promise((resolve, reject) => {
        http.request(config)
            .then((response: any) => {
                resolve(response);
            })
            .catch(error => {
                reject(error);
            });
    });
}

function get (url: string, params: any){
    return request('get',url,params)
}
function post (url: string, params: any){
    return request('post',url,params)
}
function del (url: string, params: any){
    return request('delete',url,params)
}
function put (url: string, params: any){
    return request('put',url,params)
}

export default   {
    get,
    post,
    delete: del,
    put
}