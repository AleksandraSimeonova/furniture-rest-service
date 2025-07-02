import Furniture from "../models/Furniture.js"

export default {

    create(furnitureData) {
        return Furniture.create(furnitureData)
    },
    getOne(furnitureId) {
        return Furniture.findById(furnitureId)
    },
    getAll() {
        return Furniture.find();
    },

}   