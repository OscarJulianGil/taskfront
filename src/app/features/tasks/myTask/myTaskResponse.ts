import Response from "../../Response";
import taskDto from "./taskDto";

export default interface myTaskResponse extends Response {
    data: [taskDto];
}