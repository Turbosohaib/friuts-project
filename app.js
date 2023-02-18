const mongoose = require('mongoose');

mongoose.set("strictQuery", false);
// mongoose.connect(process.env.MONGO_URL, () => {
//     console.log("Connected to MongoDB");
// });

mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB", { useNewUrlParser: true });

const fruitSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: [true, "Please check your data entry, name not specified"]
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);


// const fruit = new Fruit({
//     name: "peache",
//     rating: 10,
//     review: "peache is so yammy!"
// });

// fruit.save();

const personSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    age: Number,
    favouriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

// const pineapple = new Fruit({
//     name: "Pinapple",
//     score: 9,
//     review: "Great fruit!"
// });

// pineapple.save();

// const mango = new Fruit({
//     name: "Mango",
//     rating: 10,
//     review: "Good fruit!"
// })

// mango.save();

// Person.updateOne({ name: "john" }, { favouriteFruit: mango }, function (err) {
//     if (err) {
//         console.log(err)
//     } else (
//         console.log("Successfully updated the document!")
//     )
// });



const person = new Person({
    name: "Amy",
    age: 17,
    // favouriteFruit: pineapple
}, {
    name: "John",
    age: 20
}
);

person.save()

// const kiwi = new Fruit({
//     name: "kiwi",
//     score: 10,
//     review: "The best fruit ever!."
// });

// const orange = new Fruit({
//     name: "Orange",
//     score: 6,
//     review: "sour for me."
// });

// const banana = new Fruit({
//     name: "banana",
//     score: 7,
//     review: "Good and nice!."
// });

// const arr = [
//     {
//         name: 'kiwi',
//         score: 10,
//         review: "The best fruit ever!."
//     },
//     {
//         name: "Orange",
//         score: 6,
//         review: "sour for me."
//     },
//     {
//         name: "banana",
//         score: 7,
//         review: "Good and nice!."
//     }];
// Fruit.insertMany(arr, function (error, docs) {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log("Successfully saved all fruits to fruitsDB.");
//     }
// });

// Fruit.insertMany([kiwi, orange, banana], function (err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Successfully saved all fruits to fruitsDB.");
//     }
// });

Fruit.find(function (err, fruits) {
    if (err) {
        console.log(err)
    } else {

        mongoose.connection.close();

        fruits.forEach(function (fruit) {
            console.log(fruit.name);
        });
    }
});

// Fruit.updateOne({ _id: "63c050a77e0f65bdf1601ac5" }, { name: "peach" }, function (err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("successfully updated the document!");
//     }
// });

// Fruit.deleteOne({ name: "Apple" }, function (err) {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log("Successfully deleted document!");
//     }
// });


// function findDocuments(db, callback) {
//     // Get the documents collection
//     const collection = db.collection('fruits');
//     // Find some documents
//     collection.find({}).toArray(function (err, fruits) {
//         assert.equal(err, null);
//         console.log("Found the following records");
//         console.log(fruits);
//         callback(fruits);
//     });
// }
