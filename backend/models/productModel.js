import mongoose from 'mongoose';

// creating a product schema
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Product name is required.'], // Enforce presence of name
        trim: true, // Remove whitespace from both ends of a string
        unique: true // Ensure product names are unique
    },
    // 2. Every product needs to have a description
    description: {
        type: String,
        required: [true, 'Product description is required.'], // Enforce presence of description
        trim: true
    },

    category: {
        type: String,
        required: [true, 'Product category is required.'], // Enforce presence of category
        trim: true,
        // Example: You can add an 'enum' array here if your categories are fixed:
        // enum: ['Aromatic', 'Decorative', 'Pillar', 'Tealight', 'Container Candle', 'Votive']
    },
    bestSeller: { type: Boolean, default: false },


    variations: [{
        // 5. Some candles have sizes (optional for a variation, but usually expected)
        size: {
            type: Array,
            trim: true,
            // Example: 'Small', 'Medium', 'Large', 'Standard', 'Mini'
            // enum: ['Small', 'Medium', 'Large']
        },
        // 6. Some candles have burning hours (optional for a variation)
        burningHours: {
            type: Array,
            min: 0 // Burning hours cannot be negative
        },
        // 7. Some candles have colors (optional for a variation)
        color: {
            type: Array,
            trim: true,
            // Example: 'Red', 'Blue', 'White', 'Black', 'Gold', 'Silver'
            // Could also store hex codes like '#FF0000'
        },
        // 8. Some candles can have fragrance (optional for a variation)
        fragrance: {
            type: Array,
            trim: true,
            // Example: 'Lavender', 'Vanilla', 'Sandalwood', 'Rose', 'Unscented', 'Citrus'
        },
        // 9. Some candles may be glittered (e.g., gold, silver) (optional for a variation)
        glitter: {
            type: Array,
            trim: true,
            // Example: 'None', 'Gold', 'Silver', 'Bronze', 'Mixed', 'Iridescent'
            // enum: ['None', 'Gold', 'Silver']
        },
        // 10. The price is needed for each product, and it can depend on sizes,
        //     burning hours, colors, fragrance, and glitter.
        //     This price is specific to this particular variation.
        price: {
            type: Number,
            required: [true, 'Variation price is required.'], // Price is mandatory for each variation
            min: 0 // Price cannot be negative
        },
        // Optional: Stock quantity for this specific variation.
        stock: {
            type: Number,
            default: 0, // Default stock is 0 if not specified
            min: 0
        },
        
    }],
    date: { type: Date, default: Date.now },
})

const productModel = mongoose.models.product || mongoose.model("product", productSchema);
export default productModel;