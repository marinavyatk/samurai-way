import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {"API-KEY": 'e9641289-ee14-4d73-be86-68e64b3c2a02'}
})

export const UsersApi = {
    getUsers(currentPage: number, page: number) {
        return instance.get(`users?page=${currentPage}&count=${page}`).then((response) => {
            return response.data;
        })
    },
    follow(userId: number) {
        return instance.post(`/follow/${userId}`).then(response => response.data)
    },
    unfollow(userId: number) {
        return instance.delete(`/follow/${userId}`).then(response => response.data)
    }

}