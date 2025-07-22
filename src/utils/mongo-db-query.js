const pipeline = [{
    "$unwind": "$items"
  },
  {
    "$group": {
      "_id": {
        store: "$store",
        month: {
          "$substr": [
            "$date",
            0,
            7
          ]
        }
      },
      totalRevenue: {
        $sum: {
          "$multiply": [
            "$items.price",
            "$items.quantity"
          ]
        }
      },
      averagePrice: {
        "$avg": "$items.price"
      }
    }
  },
  {
    "$project": {
      _id: 0,
      store: "$_id.store",
      month: "$_id.month",
      totalRevenue: "$totalRevenue",
      averagePrice: "$averagePrice"
    }
  },
  {
    $sort: {
      store: 1,
      month: 1
    }
  }]
  
 
