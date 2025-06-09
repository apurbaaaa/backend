const asyncHandler = require('express-async-handler');
const logoutUser = asyncHandler(async (req, res) => {
    // Invalidate the user's session or token
    // This could involve clearing cookies, tokens, or session data
    // For simplicity, we will just send a response indicating success
    res.cookie('jwt', '', {
        httpOnly: true,
        expires: new Date(0), // Set expiration date to the past to clear the cookie
    });
    res.status(200).json({ message: 'User logged out successfully' });
});
module.exports = {
    logoutUser,
};