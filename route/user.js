const express = require("express");
const router = express.Router();

var hat = require("hat");

const { userappwrite } = require("../appwrite");

const users = userappwrite();

// list of users
// Get a list of all the project's users. You can use the query params to filter your results.
router.get("/", async (req, res) => {
  try {
    const data = await users.list();
    if (!data) {
      return res.json("not created");
    }
    res.json({ data });
  } catch (e) {
    res.json({ e });
  }
});

// get user by id
// Get a user by its unique ID.
router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const userId = await users.get(id);
    if (!userId) {
      return res.json("not getting");
    }
    res.json({ userId });
  } catch (e) {
    console.log(e);
  }
});

// Get User Sessions
// Get the user sessions list by its unique ID.
router.get("/:id/sessions", async (req, res) => {
  try {
    const id = req.params.id;

    const userId = await users.getSessions(id);
    if (!userId) {
      return res.json("not getting");
    }
    res.json({ userId });
  } catch (e) {
    console.log(e);
  }
});


// Get User Logs 
// Get the user activity logs list by its unique ID.
router.get("/:id/logs", async (req, res) => {
  try {
    const id = req.params.id;

    const userId = await users.getLogs(id);
    if (!userId) {
      return res.json("not getting");
    }
    res.json({ userId });
  } catch (e) {
    console.log(e);
  }
});

// create users
// Create a new user.
router.post("/", async (req, res) => {
  try {
    let data = await users.create(
      hat(),
      req.body.email,
      req.body.password,
      req.body.name
    );

    if (!data) {
      return res.json("not created");
    }
    res.json({ data });
  } catch (e) {
    console.log(e);
  }
});

// update name
// Update the user name by its unique ID.
router.patch("/:id/name", async (req, res) => {
  try {
    const id = req.params.id;

    const userId = await users.updateName(id, req.body.updateName);
    if (!userId) {
      return res.json("not updated");
    }
    res.json({ userId });
  } catch (e) {
    console.log(e);
  }
});

// update password
// Update the user password by its unique ID.
router.patch("/:id/password", async (req, res) => {
  try {
    const id = req.params.id;

    const userId = await users.updatePassword(id, req.body.updatePassword);
    if (!userId) {
      return res.json("not updated");
    }
    res.json({ userId });
  } catch (e) {
    console.log(e);
  }
});

// update email
// Update the user email by its unique ID.
router.patch("/:id/email", async (req, res) => {
  try {
    const id = req.params.id;

    const userId = await users.updateEmail(id, req.body.updateEmail);
    if (!userId) {
      return res.json("not updated");
    }
    res.json({ userId });
  } catch (e) {
    console.log(e);
  }
});

// delete users
// Delete a user by its unique ID.
router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;

    await users.delete(id);

    res.json({ user: "deleted" });
  } catch (e) {
    console.log(e);
  }
});

// Update Email Verification
// Update the user email verification status by its unique ID.
router.patch("/:id/verification", async (req, res) => {
  try {
    const id = req.params.id;

    const userId = await users.updateVerification(id, req.body.bool);
    if (!userId) {
      return res.json("not updated");
    }
    res.json({ userId });
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
