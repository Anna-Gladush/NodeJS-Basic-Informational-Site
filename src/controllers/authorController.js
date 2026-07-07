const db = require("../db.js");
const CustomNotFoundError = require("../errors/CustomNotFoundError");

async function getAuthorById(req, res) {
  const { authorId } = req.params;
  
  try {
    const author = await db.getAuthorById(Number(authorId));
    
    if (!author) {
      throw new CustomNotFoundError("Author not found")
      return;
    }

    res.send(`Author Name: ${author.name}`);
  } catch (error) {
    console.log("Error retrieving author: ", error);
    res.status(500).send("Internal server Error")
  }

  
}

module.exports = { getAuthorById }