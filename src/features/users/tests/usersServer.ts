import { rest } from "msw"
import { setupServer } from 'msw/node'

import { mockUserData } from "./data/mockUserData"
import { NewUser } from "../types/NewUser"
import { User } from "../types/User"
import { UserUpdate } from "../types/UserUpdate"

export const handlers = [
    rest.get('https://api.escuelajs.co/api/v1/users', (req, res, ctx) => {
        return res(ctx.json(mockUserData))
    }),
    rest.delete("https://api.escuelajs.co/api/v1/users/:id", async (req, res, ctx) => {
        const { id } = req.params
        if (mockUserData.find(u => u.id == Number(id))) {
            return res(
                ctx.json(true)
            )
        } else {
            return res(
                ctx.json(false)
            )
        }
    }),
    rest.post("https://api.escuelajs.co/api/v1/users", async (req, res, ctx) => {
        const input : NewUser = await req.json()
        const user : User = {
                id: mockUserData.length +1,
                name: input.name,
                email: input.email,
                role: "customer"
        }
        return res(ctx.json(user))
    }),
    rest.put("https://api.escuelajs.co/api/v1/users/:id", async (req, res, ctx) => {
        const input : UserUpdate = await req.json()
        const { id } = req.params
        const userIndex = mockUserData.findIndex(u => u.id === Number(id))
        if (userIndex > -1) {
                const updatedUser : User = {
                    ...mockUserData[userIndex],
                    ...input
                }
                return res(ctx.json(updatedUser))
        } else {
            return res(ctx.status(400))
        }
    }),
    rest.post("https://api.escuelajs.co/api/v1/users/is-available", async (req, res, ctx) => {
        const email = await req.json()
        const emailFound = mockUserData.find(u => u.email === email)
        if (emailFound) {
            return res(
                ctx.json({isAvailable: false})
            )
        } else {
            return res(
                ctx.json({isAvailable: true})
            )
        }
    })
]

const usersServer = setupServer(...handlers)

export default usersServer