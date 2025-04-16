import ApiResponse from "../utils/Api-Response.js";

const healthcheck = async (req,res) =>{
    res.status(200).json(
        new ApiResponse(200,"Server is running good")
    )
}

export default healthcheck