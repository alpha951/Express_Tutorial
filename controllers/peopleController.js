let { people } = require('../data')


const getPeople = (req, res) => {
    res.status(200).json({ success: true, data: people })
}

/**
 * The function creates a person object with a name property and returns a JSON response with the
 * person's name.
 * @param req - req stands for request and it is an object that contains information about the incoming
 * HTTP request such as the request headers, request parameters, request body, etc. It is passed as the
 * first parameter to the createPerson function.
 * @param res - `res` is the response object that is used to send a response back to the client who
 * made the request. It contains methods such as `status()` and `json()` that are used to set the
 * status code and send a JSON response respectively.
 * @returns If the `name` value is not provided in the request body, a response with status code 400
 * and a JSON object containing `success: false` and an error message will be returned. Otherwise, a
 * response with status code 201 and a JSON object containing `success: true` and the `name` value will
 * be returned.
 */
const createPerson = (req, res) => {
    const { name } = req.body
    if (!name) {
        return res
            .status(400)
            .json({ success: false, msg: 'please provide name value' })
    }
    res.status(201).json({ success: true, person: name })
}

/**
 * The function creates a new person and adds their name to an array if a name value is provided in the
 * request body, otherwise it returns an error message.
 * @param req - req stands for request and it is an object that contains information about the incoming
 * HTTP request such as the request headers, request parameters, request body, etc. It is passed as the
 * first parameter to the createPersonPostman function.
 * @param res - `res` is the response object that is sent back to the client making the request. It
 * contains information such as the status code, headers, and data that is being sent back in response
 * to the request. In this case, `res` is being used to send a JSON response with a success
 * @returns If the `name` value is not provided in the request body, a response with status code 400
 * and a JSON object containing `success: false` and an error message will be returned. Otherwise, a
 * response with status code 201 and a JSON object containing `success: true` and an array of people
 * including the new `name` value will be returned.
 */
const createPersonPostman = (req, res) => {
    const { name } = req.body
    if (!name) {
        return res
            .status(400)
            .json({ success: false, msg: 'please provide name value' })
    }
    res.status(201).json({ success: true, data: [...people, name] })
}

/**
 * This function updates the name of a person in an array of people based on their ID.
 * @param req - The request object, which contains information about the incoming HTTP request such as
 * headers, parameters, and body.
 * @param res - `res` is the response object that is used to send a response back to the client making
 * the request. It contains methods such as `status` and `json` that are used to set the HTTP status
 * code and send a JSON response, respectively.
 * @returns a JSON response with a success status and either an error message or updated data depending
 * on whether the person with the specified ID was found or not.
 */
const updatePerson = (req, res) => {
    const { id } = req.params
    const { name } = req.body
    console.log(id, name)
    const person = people.find((person) => person.id === Number(id))

    if (!person) {
        return res
            .status(404)
            .json({ success: false, msg: `no person with id ${id}` })
    }
    const newPeople = people.map((person) => {
        if (person.id === Number(id)) {
            person.name = name
        }
        return person
    })
    res.status(200).json({ success: true, data: newPeople })
}

/**
 * The function deletes a person from an array of people based on their ID and returns a success
 * message with the updated array.
 * @param req - req stands for request and it is an object that contains information about the incoming
 * HTTP request such as the request parameters, headers, body, etc.
 * @param res - `res` is the response object that is sent back to the client after the server has
 * processed the request. It contains information such as the status code, headers, and data that is
 * being sent back to the client. In this case, `res` is used to send a JSON response with a
 * @returns The function `deletePerson` returns a JSON response with a success status and either an
 * error message or the updated list of people after removing the person with the specified ID.
 */
const deletePerson = (req, res) => {
    const person = people.find((person) => person.id === Number(req.params.id))
    if (!person) {
        return res
            .status(404)
            .json({ success: false, msg: `no person with id ${req.params.id}` })
    }
    const newPeople = people.filter(
        (person) => person.id !== Number(req.params.id)
    )
    return res.status(200).json({ success: true, data: newPeople })
}

module.exports = { getPeople, createPerson, createPersonPostman, updatePerson, deletePerson }