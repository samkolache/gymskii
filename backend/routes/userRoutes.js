import express from 'express'
import {User} from '../models/userModel.js'

const router = express.Router()

// Route for save new user
router.post('/', async (request, response) => {
    try {
        if (
            !request.body.firstName ||
            !request.body.lastName ||
            !request.body.emailAddress ||
            !request.body.phoneNumber ||
            !request.body.quote
        ) {
            return response.status(400).send({
                message: "send all required fields: title, author, publishYear",
            })
        }
        const newUser = {
            firstName: request.body.firstName,
            lastName: request.body.lastName,
            emailAddress: request.body.emailAddress,
            phoneNumber: request.body.phoneNumber,
            quote: request.body.quote
        }
        const user = await User.create(newUser)

        return response.status(201).send(user)
    } catch(error) {
        console.log(error.message)
        response.status(500).send({message: error.message})
    }
})


//route to get one user
router.get('/:id', async (request, response) => {
    try{
        
        const {id} = request.params
        
        const user = await User.findById(id);
        if(!user) {
            return response.status(404).send({ message: 'User not found' });
        }
        return response.status(200).json(user)
    } catch(error) {
        console.log(error.message)
        response.status(500).send({message: error.message})

    }
})

router.put('/:id', async (request, response) => {
    try {
      if (
        !request.body.firstName ||
        !request.body.lastName ||
        !request.body.emailAddress ||
        !request.body.phoneNumber ||
        !request.body.quote
      ) {
        return response.status(400).send({ message: "send all required fields" });
      }
  
      const { id } = request.params;
      const result = await User.findByIdAndUpdate(id, request.body, { new: true });
  
      if (!result) {
        return response.status(404).json({ message: "User not found" });
      }
  
      return response.status(200).send({ message: 'User updated!' });
    } catch (error) {
      console.log(error);
      response.status(500).send({ message: error.message });
    }
  });
  

export default router