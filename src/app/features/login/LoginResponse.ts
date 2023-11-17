import Response from "../Response";

export default interface LoginResponse extends Response{
    token:string|null;
    id:string;
}