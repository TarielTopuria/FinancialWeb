import axios from "axios"
import { CompanyIncomeStatement, CompanyKeyMetrics, CompanyProfile, CompanySearch } from "./company";

interface SearchResponse {
    data: CompanySearch[];
}

export const searchCompanies = async (query: string) => {
    try {
        const data = await axios.get<SearchResponse>(
            `https://financialmodelingprep.com/api/v3/search?query=${query}&limit=10&exchange=NASDAQ&apikey=YLPabTkG7dvhFLFs7tyZU5c5ypWAXe6R`
        );
        return data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log("Error message: ", error.message);
            return error.message;
        } else {
            console.log("Unexpected error: ", error);
            return "An unexpected error occured";
        }
    }
}

export const getCompanyProfile = async (query: string) => {
    try {
        const data = await axios.get<CompanyProfile[]>
            (
                `https://financialmodelingprep.com/api/v3/profile/${query}?apikey=YLPabTkG7dvhFLFs7tyZU5c5ypWAXe6R`
            )
        return data;
    }
    catch (error: any) {
        console.log("Error message form API: ", error.message)
    }
}

export const getKeyMetrics = async (query: string) => {
    try {
        const data = await axios.get<CompanyKeyMetrics[]>
            (
                `https://financialmodelingprep.com/api/v3/key-metrics-ttm/${query}?apikey=YLPabTkG7dvhFLFs7tyZU5c5ypWAXe6R`
            )

        return data;
    }
    catch (error: any) {
        console.log("Error message from getKeyMetrics: ", error.message)
    }
}

export const getIncomeStatement = async (query: string) => {
    try {
        const data = await axios.get<CompanyIncomeStatement[]>
            (
                `https://financialmodelingprep.com/api/v3/income-statement/${query}?period=annual&apikey=YLPabTkG7dvhFLFs7tyZU5c5ypWAXe6R`
            )

        return data;
    }
    catch (error: any) {
        console.log("Error message from getKeyMetrics: ", error.message)
    }
}