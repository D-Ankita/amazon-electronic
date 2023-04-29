import bcrypt from "bcryptjs"

export const users = [
    {
        name: "Ankita D.",
        email: "AnkitaD@gmail.com",
        password: bcrypt.hashSync('1234', 8),
        isAdmin: true,
    },
    {
        name: "Ankita.",
        email: "Ankita@gmail.com",
        password: bcrypt.hashSync('1234', 8),
        isAdmin: false,
    },
]