import Response from "../Response";

export default interface registerUserResponse extends Response{
    id : string;
    token:string;
}