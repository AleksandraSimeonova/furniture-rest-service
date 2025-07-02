import Furniture from "../models/Furniture.js"

export default {

    create(furnitureData, ownerId) {
        return Furniture.create({ ...furnitureData, _ownerId: ownerId })
    },
    getOne(furnitureId) {
        return Furniture.findById(furnitureId)
    },
    getAll() {
        return Furniture.find();
    },
    delete(furnitureId) {
        return Furniture.findByIdAndDelete(furnitureId);
    },
    update(furnitureId, furnitureData) {
        return Furniture.findByIdAndUpdate(furnitureId, furnitureData);
    },

}   