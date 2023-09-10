import axiosInstance from ".";

class AuthAPI {
    constructor(instance=axiosInstance) {
        this.axios = instance;
    }

    async login(credentials) {
        try {
            const response = await this.axios.post("/api-auth/login/", credentials)
            return response.data
        } catch (error) {
            this.handleApiError(error.message)
        } 
    }
    handleApiError(error) {
        console.error(`API Error in ${this.endpoint}:`, error);
        throw error;
    }
}

export default AuthAPI