import jwt from 'jsonwebtoken'

export const adminLogin = async (req, res) => {
    const { username, password } = req.body;
    if (username === process.env.ADMIN_USERNAME && password === process.env.ADMIN_PASSWORD) {
        const token = jwt.sign({ username, role: 'admin' }, process.env.SECRET_STR, {
            expiresIn: process.env.LOGIN_EXPIRES
        });
        res.status(200).json({
            message: 'Login success',
            token
        });                
    } else {
        res.status(404).json({
            status: 'Not found',
            message: 'Invalid admin'
        });
    }
};