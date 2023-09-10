import axiosInstance from "."

export default class RoomsAPI {
    constructor(instance=axiosInstance) {
        this.axios = instance
    }

    getAll = async () => {
        try {
            const response = await this.axios.get("/api/rooms/")
            return response.data
        } catch (error) {
            console.error(error)
        }
    }
}