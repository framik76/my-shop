migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lq0bbmh2g6ubecx")

  collection.createRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lq0bbmh2g6ubecx")

  collection.createRule = null

  return dao.saveCollection(collection)
})
