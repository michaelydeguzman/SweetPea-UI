import axios from 'axios';

import { API_URL as developmentAPI } from "../../data/config.development";
import { API_URL as productionAPI } from "../../data/config.production";

const API_URL = process.env.NODE_ENV === 'production' ? productionAPI : developmentAPI;

const menuAPI = {
    fetchMenuGroups: async () => {
        const response = await axios.get(`${API_URL}/v1/menu/menu_groups`);
        return response;
    },

    fetchProductsByMenu: async (menuGroupId) => {
        const response = await axios.get(`${API_URL}/v1/menu/menu_groups/${menuGroupId}`);
        return response;
    }
}
export default menuAPI