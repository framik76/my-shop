migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("615uw49xlvwq90o")

  collection.listRule = ""
  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("615uw49xlvwq90o")

  collection.listRule = null
  collection.viewRule = null

  return dao.saveCollection(collection)
})
