// Deleting Items from the MongoDB Database

db.items.find({price:67000})

db.items.deleteOne({price:67000})  // deleteOne will delete the first matching document entry- 1

db.items.deleteMany({price:67000})  //Delets every object matched with the filter object


