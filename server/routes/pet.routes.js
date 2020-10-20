const PetController = require('../controllers/pet.controllers');

module.exports = function(app){
    app.get('/api/pets', PetController.getAllPets);
    app.post('/api/pet/new', PetController.createPet);
    app.get('/api/pet/:id', PetController.getPet);
    app.put('/api/pets/:id/update', PetController.updatePet);
    app.delete('/api/pet/:id/delete', PetController.deletePet);
}
