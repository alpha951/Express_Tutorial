
/**
 * The function checks if a name is provided in the request body and returns a welcome message with the
 * name or a 401 error message if no name is provided.
 * @param req - req stands for request and it is an object that contains information about the incoming
 * HTTP request such as the request headers, request parameters, request body, etc.
 * @param res - `res` is the response object that is used to send a response back to the client making
 * the request. It contains methods such as `status()` to set the HTTP status code of the response,
 * `send()` to send a response body, and many others. In this code snippet, `res
 * @returns If the `name` property exists in the `req.body` object, a response with a status code of
 * 200 and a message that includes the name will be returned. Otherwise, a response with a status code
 * of 401 and a message asking for credentials will be returned.
 */

const authenticate = (req, res) => {
    const { name } = req.body
    if (name) {
        return res.status(200).send(`Welcome ${name}`)
    }

    res.status(401).send('Please Provide Credentials')
}

module.exports = authenticate