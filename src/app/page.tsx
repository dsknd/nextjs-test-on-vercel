type User = {
    createdAt: string;
    name: string;
    avatar: string;
    id: string;
}

export default async function Home() {
    const res = await fetch("https://663ac4fbfee6744a6e9f54ec.mockapi.io/users")
    const users: User[] = await res.json()

    return (
        <>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </>
    );
}