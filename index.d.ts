declare module 'openouath-package' {
    export function GenerateOuathURL(callback:any, type:any): Promise<any>;
    export function GetUserInfo(access_token:any, type:any): Promise<any>;
}