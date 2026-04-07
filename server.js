import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/sky-builders';

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
mongoose.connect(MONGODB_URI)
  .then(() => console.log('✅ Connected to MongoDB successfully'))
  .catch((err) => console.error('❌ Error connecting to MongoDB:', err));

// Define Schema & Model dynamically for Home Designs
const designSchema = new mongoose.Schema({
  name: String,
  series: String,
  image: String,
  floorplan: String,
  beds: Number,
  baths: Number,
  cars: Number,
  minLotWidth: Number,
  price: Number,
  designType: String,
  features: [String],
  tags: String,
  displayHome: Boolean
});

const HomeDesign = mongoose.model('HomeDesign', designSchema);

// Initial Data Seed function
const seedDatabase = async () => {
    try {
        const count = await HomeDesign.countDocuments();
        if (count === 0) {
            console.log('Seeding initial home designs into MongoDB...');
            const seedData = [
                { name: 'Yindi', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800', floorplan: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=800', beds: 4, baths: 2, cars: 2, minLotWidth: 15, price: 450000, designType: 'Single Storey', features: ['Alfresco'], tags: '15M FRONTAGE, CORNER BLOCK DESIGNS, DISPLAY HOMES', displayHome: true },
                { name: 'Whitewood', series: 'VENTI', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800', floorplan: 'https://images.unsplash.com/photo-1600566752355-3510b60b458a?auto=format&fit=crop&q=80&w=800', beds: 4, baths: 2, cars: 2, minLotWidth: 15, price: 370000, designType: 'Single Storey', features: ['Theatre'], tags: '15M FRONTAGE, SINGLE STOREY DESIGNS', displayHome: false },
                { name: 'El Mar', series: 'VENTI', image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800', floorplan: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800', beds: 4, baths: 2, cars: 2, minLotWidth: 15, price: 480000, designType: 'Courtyard', features: ['Alfresco'], tags: 'COURTYARD DESIGNS', displayHome: false },
                { name: 'Sento', image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800', floorplan: 'https://images.unsplash.com/photo-1600607688969-a5bfcd72cf20?auto=format&fit=crop&q=80&w=800', beds: 3, baths: 2, cars: 2, minLotWidth: 12.5, price: 520000, designType: 'Single Storey', features: ['Alfresco', 'Theatre'], tags: '12.5M FRONTAGE, DISPLAY HOMES', displayHome: true },
                { name: 'Azul', image: 'https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&q=80&w=800', floorplan: 'https://images.unsplash.com/photo-1600566753086-00f18efc2294?auto=format&fit=crop&q=80&w=800', beds: 4, baths: 2, cars: 2, minLotWidth: 15, price: 540000, designType: 'Two Storey', features: ['Theatre'], tags: '15M FRONTAGE', displayHome: false },
                { name: 'Lumo', image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800', floorplan: 'https://images.unsplash.com/photo-1600585154526-990dced4df08?auto=format&fit=crop&q=80&w=800', beds: 3, baths: 2, cars: 1, minLotWidth: 10, price: 410000, designType: 'Single Storey', features: ['Alfresco'], tags: '10M FRONTAGE, NARROW LOT DESIGNS', displayHome: false },
                { name: 'Kali', image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=800', floorplan: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=800', beds: 4, baths: 2, cars: 2, minLotWidth: 17, price: 390000, designType: 'Single Storey', features: [], tags: '17M FRONTAGE, DISPLAY HOMES', displayHome: true },
                { name: 'Aria', image: 'https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?auto=format&fit=crop&q=80&w=800', floorplan: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800', beds: 4, baths: 3, cars: 2, minLotWidth: 15, price: 500000, designType: 'Two Storey', features: ['Alfresco', 'Theatre'], tags: 'TWO STOREY DESIGNS', displayHome: false },
                { name: 'Solis', image: 'https://images.unsplash.com/photo-1588880331179-bc9b93a8cb65?auto=format&fit=crop&q=80&w=800', floorplan: 'https://images.unsplash.com/photo-1600566753086-00f18efc2294?auto=format&fit=crop&q=80&w=800', beds: 5, baths: 3, cars: 2, minLotWidth: 17, price: 530000, designType: 'Single Storey', features: ['Theatre'], tags: '17M FRONTAGE, COUNTRY DESIGNS', displayHome: false },
                { name: 'Canvas', image: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&q=80&w=800', floorplan: 'https://images.unsplash.com/photo-1600607688969-a5bfcd72cf20?auto=format&fit=crop&q=80&w=800', beds: 3, baths: 2, cars: 2, minLotWidth: 12.5, price: 460000, designType: 'Two Storey', features: ['Alfresco'], tags: '12.5M FRONTAGE', displayHome: false },
                { name: 'Alder', image: 'https://images.unsplash.com/photo-1620300431327-024af6e771c9?auto=format&fit=crop&q=80&w=800', floorplan: 'https://images.unsplash.com/photo-1600566752355-3510b60b458a?auto=format&fit=crop&q=80&w=800', beds: 4, baths: 2, cars: 2, minLotWidth: 15, price: 490000, designType: 'Single Storey', features: [], tags: '15M FRONTAGE, MULTIGENERATIONAL', displayHome: false },
                { name: 'Picco', image: 'https://images.unsplash.com/photo-1542314831-c6a4d1424b91?auto=format&fit=crop&q=80&w=800', floorplan: 'https://images.unsplash.com/photo-1600585154526-990dced4df08?auto=format&fit=crop&q=80&w=800', beds: 3, baths: 2, cars: 2, minLotWidth: 12.5, price: 380000, designType: 'Courtyard', features: ['Alfresco'], tags: '12.5M FRONTAGE, COURTYARD DESIGNS', displayHome: false }
            ];
            await HomeDesign.insertMany(seedData);
            console.log('Seeded database successfully.');
        }
    } catch (err) {
        console.error('Failed to seed database:', err);
    }
};

mongoose.connection.once('open', seedDatabase);

// API Routes
app.get('/api/designs', async (req, res) => {
    try {
        const designs = await HomeDesign.find();
        res.json(designs);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch designs' });
    }
});

// React Static Files (Docker / Production mode)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, 'dist')));

app.use((req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Start Server
app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
});
