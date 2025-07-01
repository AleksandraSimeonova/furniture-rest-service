import { model, Schema, Types } from "mongoose";

const furnitureSchema = new Schema({
    make: {
        type: String,
      
    },
    model: {
        type: String,
       
    },
    year: {
        type: Number,
   
    },
    description: {
        type: String,
        
    },
    price: {
        type: Number,
        
    },
    img: {
        type: String,
        required: true,
    },
    material: {
        type: String,
        required: false,
    },
    _ownerId: {
        type: Types.ObjectId,
        ref: 'User',
    }
});

const Furniture = model('Furniture', furnitureSchema);

export default Furniture;