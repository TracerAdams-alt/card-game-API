const mongoose = require('mongoose');
const Card = require('./models/card');
const cards = require('./Data/cards');

const MONGO_URI = 'mongodb://localhost:27017/cardgame';

async function seedCards() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('✅ Connected to MongoDB');

    await Card.deleteMany({});
    console.log('🧹 Cleared old card data');

    await Card.insertMany(cards);
    console.log(`📦 Inserted ${cards.length} cards`);

    await mongoose.disconnect();
    console.log('✅ Disconnected');
  } catch (err) {
    console.error('❌ Error seeding cards:', err);
    await mongoose.disconnect();
  }
}

seedCards();
