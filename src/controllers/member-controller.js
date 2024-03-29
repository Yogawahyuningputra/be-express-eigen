import memberService from '../services/member-service.js'

const registerMember = async (req, res, next) => {
    try {
        const request = req.body
        const result = await memberService.create(request)
        res.status(201).json({ message: 'Member berhasil terdaftar.', data: result });
    } catch (error) {
        next(error)
    }
};

export { registerMember }