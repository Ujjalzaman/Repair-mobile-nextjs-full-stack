export const getBaseUrl = ():string =>{
    return "http://localhost:5051/api/v1"
}

export const getApiKey = ():string =>{
    return process.env.IMAGEBBKEY || "http://localhost:5051/api/v1"
}

// process.env.NEXT_PUBLIC_API_BASE_URL || 