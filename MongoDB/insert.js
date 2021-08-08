// Inserting data in MongoDB
use NepFashion

db.items.insertOne({
    name:"Samsung Galaxy S9",
    price:67000,
    rating:4.8,
    qty:20,
    sold:98
});

db.items.insertMany([{
    name:"Samsung Galaxy S5",
    price:6700,
    rating:4.8,
    qty:200,
    sold:98},
    { name:"Iphone SE",
    price:67000,
    rating:4.2,
    qty:20,
    sold:198}
]);