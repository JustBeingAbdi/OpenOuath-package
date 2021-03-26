declare module 'openouath-package' {
    export function GenerateOuathURL(callback:any, type:any): Promise<any>;
    export function GetGithubUserInfo(access_token:any): Promise<any>;
}