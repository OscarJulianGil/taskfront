import Response from "../../Response";
import selectAllDto from "./selectAllDto";

export default interface selectAllResponse extends Response{
    data: [selectAllDto];
}

