// const faker = require('faker');
<<<<<<< HEAD
const userSeeds = require("./userSeed.json");
const thoughtSeeds = require("./thoughtSeed.json");
const db = require("../config/connection");
const { Thought, User } = require("../models");

db.once("open", async () => {
  try {
    await Thought.deleteMany({});
    await User.deleteMany({});

    await User.create(userSeeds);

=======
const userSeeds = require('./userSeed.json');
const thoughtSeeds = require('./thoughtSeed.json');
const db = require('../config/connection');
const { Thought, User } = require('../models');

db.once('open', async () => {
  try {
    await Thought.deleteMany({});
    await User.deleteMany({});

    await User.create(userSeeds);

>>>>>>> main
    for (let i = 0; i < thoughtSeeds.length; i++) {
      const { _id, thoughtAuthor } = await Thought.create(thoughtSeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: thoughtAuthor },
        {
          $addToSet: {
            thoughts: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

<<<<<<< HEAD
  console.log("all done!");
=======
  console.log('all done!');
>>>>>>> main
  process.exit(0);
});