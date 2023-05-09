migrate((db) => {
  const collection = new Collection({
    "id": "lq0bbmh2g6ubecx",
    "created": "2023-05-05 06:57:41.240Z",
    "updated": "2023-05-05 06:57:41.240Z",
    "name": "orders",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "y1i8zrg5",
        "name": "order",
        "type": "json",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "cokkjllt",
        "name": "user",
        "type": "json",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "8pel4kkz",
        "name": "total",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "zycwbgtw",
        "name": "status",
        "type": "select",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "pending",
            "done"
          ]
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("lq0bbmh2g6ubecx");

  return dao.deleteCollection(collection);
})
