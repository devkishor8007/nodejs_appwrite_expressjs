const express = require("express");
const router = express.Router();

const { databaseappwrite } = require("../appwrite");

var hat = require("hat");

let database = databaseappwrite();

// Create Collection
// Create a new Collection.
router.post("/", async (req, res) => {
  try {
    const collection = await database.createCollection(
      req.body.collectionId,
      req.body.name,
      "document",
      ["role:all"],
      ["role:all"]
    );
    if (!collection) {
      return res.json("not getting");
    }
    res.json({ collection });
  } catch (e) {
    console.log(e);
  }
});


// List Collections
// Get a list of all the user collections. You can use the query params to filter your results.
router.get("/", async (req, res) => {
  try {
    const collection = await database.listCollections();
    if (!collection) {
      return res.json("not getting");
    }
    res.json({ collection });
  } catch (e) {
    console.log(e);
  }
});

// List Documents 
router.get("/:id/documents", async (req, res) => {
  try {
    const id = req.params.id;
    const listDocuments = await database.listDocuments(id);
    if (!listDocuments) {
      return res.json("not getting");
    }
    res.json({ listDocuments });
  } catch (e) {
    console.log(e);
  }
});


// Get Collection
// Get a collection by its unique ID. This endpoint response returns a JSON object with the collection metadata.
router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const collection = await database.getCollection(id);
    if (!collection) {
      return res.json("not getting");
    }
    res.json({ collection });
  } catch (e) {
    console.log(e);
  }
});

// Create String Attribute
router.post("/:id/attributes/string", async (req, res) => {
  try {
    const id = req.params.id;
    const postData = await database.createStringAttribute(
      id,
      req.body.name,
      255,
      req.body.required
    );
    if (!postData) {
      return res.json("not getting");
    }
    res.json({ postData });
  } catch (e) {
    console.log(e);
  }
});

// Create Boolean Attribute
router.post("/:id/attributes/boolean", async (req, res) => {
  try {
    const id = req.params.id;
    const booleanattribute = await database.createBooleanAttribute(
      id,
      req.body.name,
      req.body.required
    );
    if (!booleanattribute) {
      return res.json("not getting");
    }
    res.json({ booleanattribute });
  } catch (e) {
    console.log(e);
  }
});

// Delete Attribute
router.delete("/:id/attributes/:attributeKey", async (req, res) => {
  try {
    const id = req.params.id;
    const attributeKey = req.params.attributeKey;
    await database.deleteAttribute(id, attributeKey);
    res.json({ msg: "delete attribute successfully!" });
  } catch (e) {
    console.log(e);
  }
});

// List Attributes
router.get("/:id/attributes", async (req, res) => {
  try {
    const id = req.params.id;
    const checkList = await database.listAttributes(id);
    if (!checkList) {
      return res.json("not getting");
    }
    res.json({ checkList });
  } catch (e) {
    console.log(e);
  }
});


// Create Document
router.post("/:id/documents", async (req, res) => {
  const id = req.params.id;
  try {
    const docum = await database.createDocument(
      id,
      hat(),
      {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
      },
      ["role:all"],
      ["role:all"]
    );
    if (!docum) {
      return res.json("not getting");
    }
    res.json({ docum });
  } catch (e) {
    console.log(e);
  }
});


// Update Document
// Update a document by its unique ID. Using the patch method you can pass only specific fields that will get updated.
router.patch("/:id/documents/:docId", async(req, res) => {
  const id = req.params.id;
  const docId = req.params.docId;
  try {
    const updateData =await database.updateDocument(
      id,
      docId,
      {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
      },
      ["role:all"],
      ["role:all"]
    );
    if (!updateData) {
      return res.json("not getting");
    }
    res.json({ updateData });
  } catch (e) {
    console.log(e);
  }
});


// Delete Document
// Delete a document by its unique ID. 
// This endpoint deletes only the parent documents, its attributes and relations to other documents
router.delete("/:id/documents/:docId", async(req, res) => {
  const id = req.params.id;
  const docId = req.params.docId;
  try {
    const deleteData = await database.deleteDocument(id, docId);
    if (!deleteData) {
      return res.json("not getting");
    }
    res.json({ msg: "delete successfully!" });
  } catch (e) {
    console.log(e);
  }
});

// Get Document 
// Get a document by its unique ID. This endpoint response returns a JSON object with the document data.
router.get("/:id/documents/:docId", async (req, res) => {
  const id = req.params.id;
  const docId = req.params.docId;
  try {
    const getData = await database.getDocument(id, docId);
    if (!getData) {
      return res.json("not getting");
    }
    res.json({ getData });
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
