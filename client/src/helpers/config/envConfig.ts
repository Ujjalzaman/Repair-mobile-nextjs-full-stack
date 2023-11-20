const url:string = process.env.NODE_ENV === "development" ?  "http://localhost:5051/api/v1" : 'https://fixmyphone-ujjalzaman.vercel.app/api/v1'

export const getBaseUrl = ():string =>{
    return  url;
}