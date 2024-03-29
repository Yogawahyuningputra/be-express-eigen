import { prismaClient } from "../applications/database.js"
import { ResponseError } from "../error/response-error.js"
import { createMemberValidation } from "../validation/member-validation.js"
import { validate } from "../validation/validation.js"

const create = async (request) => {
    const member = validate(createMemberValidation, request)

    const isExist = await prismaClient.member.count({
        where: {
            code: member.code,
            name: member.name
        }

    })

    if (isExist === 1) {
        throw new ResponseError(400, " member already exists")
    }
    const result = await prismaClient.member.create({
        data: member,
        select: {
            code: true,
            name: true
        }
    })
    return result

}
export default {
    create
}