
export interface ControllerInitializationResult {
  
}


export interface InitializationResponse {
    initialized: boolean,
    message?: string
}

export interface IController {
    initialize(): Promise<InitializationResponse>,
    terminate(): Promise<void>,
    initializeControllers(): Promise<ControllerInitializationResult>
}

export class Controller implements IController {

    
    constructor (projectId:string, getToken:()=>Promise<string>, serverUrl:string, users:any[], breadcrumbs:any) {
    }

    initialize = async () => {

        return {initialized: true};
    }

    terminate = async () => {

    }

    initializeControllers = async () => {

        return {  };
    }
}

