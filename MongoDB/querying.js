use NepFashion

// Searching for data in Mongo DB

db.items.find({price:67000})  //This query will give objects with the given filter object:price:67000;


db.items.find({rating: {$gte : 4.5}}) 

db.items.find({rating: {$gt : 4.5}}) 

db.items.find({rating: {$gte : 4.5},price:{gt:600}}) 

// AND

db.items.find({rating: {$gte : 4.5},sold:{$lte:98}})


// OR
db.items.find({ $or:[{rating: {$gte : 4.5}},{sold:{$lte:98}}]})

