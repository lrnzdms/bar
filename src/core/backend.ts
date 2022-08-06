import axios, { AxiosRequestConfig } from 'axios';

let GetAccessToken:()=>Promise<string>;
let ServerUrl:string;

const post = async (req: { url: string, data: any }) => {
    const authorization = await GetAccessToken();
    return axios({
        method: 'post',
        url: ServerUrl+req.url,
        headers: { 'Content-Type': 'application/json', authorization },
        data: req.data
    })
}

const get = async (url:string, responseType?:string) => {
    const authorization = await GetAccessToken();

    const config:AxiosRequestConfig = {
        method: 'get', 
        url: ServerUrl+url, 
        headers: { authorization }
    }
    
    if (responseType) {
        config.responseType = responseType as any;
    }

    return axios(config);
}

const del = async (url:string) => {
    const authorization = await GetAccessToken();
    return axios({method: 'delete', url: ServerUrl+url, headers: { authorization }});
}


// RELEASES

const createRelease = async (collectionId:string) => {
    const  res = await get(`/assets/${collectionId}/releases/create`);
    return Promise.resolve();
}

const discoverRelease = async (collectionId: string) => {
    const releases = await get(`/assets/${collectionId}/releases`);
    return releases.data;
}

const setStagingRelease = async (collectionId:string, releaseId?:string) => {
    const data = JSON.stringify({releaseId});
    const res = await post({url: `/assets/${collectionId}/releases/staging`, data});
    return res.data;
}

const setLiveRelease = async (collectionId:string, releaseId?:string) => {
    const data = JSON.stringify({releaseId});
    const res = await post({url: `/assets/${collectionId}/releases/live`, data});
    return res.data;
}

export interface IBackendController {
    createRelease:(collectionId:string)=>Promise<void>,
    discoverRelease:(collectionId: string)=>Promise<any>,
    setStagingRelease:(collectionId:string, releaseId?:string)=>Promise<any>,
    setLiveRelease:(collectionId:string, releaseId?:string)=>Promise<any>,
}

export class BackendController implements IBackendController {
    constructor (getAccessToken:()=>Promise<string>, serverUrl:string) {
        GetAccessToken = getAccessToken;
        ServerUrl = serverUrl;
    }

    createRelease = (collectionId:string) => {
        return createRelease(collectionId);
    }

    discoverRelease = (collectionId: string) => {
        return discoverRelease(collectionId);
    }
    
    setStagingRelease = (collectionId:string, releaseId?:string) => {
        return setStagingRelease(collectionId, releaseId);
    }

    setLiveRelease = (collectionId:string, releaseId?:string) => {
        return setLiveRelease(collectionId, releaseId);
    }

}