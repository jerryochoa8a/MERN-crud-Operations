const { Pet } = require('../models/pet.models');



module.exports.createPet = (request, response) => {
    const { petName, petType, desc, skill1, skill2, skill3 } = request.body;
    Pet.create({
        petName,
        petType,
        desc,
        skill1,
        skill2,
        skill3,
    })
        .then(pet => response.json(pet))
        .catch(err => response.status(400).json(err))
}

module.exports.getAllPets  = (request, response) => {
    Pet.find({})
        .then(pets => response.json(pets)) //this is a the var that we can use
        .catch(err => response.json(err))
}

module.exports.getPet = (request, response) => {
    Pet.findOne({_id:request.params.id})
        .then(onePet => response.json(onePet))
        .catch(err => response.json(err))
}

module.exports.updatePet = (request, response) => {
    Pet.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedPet => response.json(updatedPet))
        .catch(err => response.json(err))
}

module.exports.deletePet = (request, response) => {
    Pet.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}