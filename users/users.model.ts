const users = [
    {
        id: '1',
        name: "Luis Gustavo",
        email: "gusouza980@gmail.com"
    },
    {
        id: '2',
        name: "Kauanna",
        email: "kakauhp@outlook.com"
    }
]

export class User{
    static findAll(): Promise<any[]>{
        return Promise.resolve(users)
    }
    static findById(id: String): Promise<any>{
        const filtered = users.filter(user => user.id === id)
        let user = undefined
        if(filtered.length > 0){
            user = filtered[0]
        }
        return Promise.resolve(user)
    }
}