import axios from "axios"
import { CompanySearch } from "./company";

interface SearchResponse {
    data: CompanySearch[];
}

export const searchCompanies = async (query:string) => {
    try{
        const data = await axios.get<SearchResponse>(
            `https://financialmodelingprep.com/api/v3/search?query=${query}&limit=10&exchange=NASDAQ&apikey=YLPabTkG7dvhFLFs7tyZU5c5ypWAXe6R`
        );
        return data;
    }catch (error){
        if(axios.isAxiosError(error)){
            console.log("Error message: ", error.message);
            return error.message;
        }else{
            console.log("Unexpected error: ", error);
            return "An unexpected error occured";
        }
    }
}