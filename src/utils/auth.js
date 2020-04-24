export default function auth(token) {
    return {
        headers:
            {
                Authorization: `Bearer ${token}`
            }
    }
}

