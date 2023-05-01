// let posts = [
//   {
//     id: 1,
//     name: "John",
//     text: "Whole every miles as tiled at seven or. Wished he entire esteem mr oh by. Possible bed you pleasure civility boy elegance ham. He prevent request by if in pleased. Picture too and concern has was comfort. Ten difficult resembled eagerness nor. Same park bore on be. Warmth his law design say are person. Pronounce suspected in belonging conveying ye repulsive",
//   },
//   {
//     id: 2,
//     name: "Tom",
//     text: "Whole every miles as tiled at seven or. Wished he entire esteem mr oh by. Possible bed you pleasure civility boy elegance ham. He prevent request by if in pleased. Picture too and concern has was comfort. Ten difficult resembled eagerness nor. Same park bore on be. Warmth his law design say are person. Pronounce suspected in belonging conveying ye repulsive",
//   },
//   {
//     id: 3,
//     name: "Alex",
//     text: "Whole every miles as tiled at seven or. Wished he entire esteem mr oh by. Possible bed you pleasure civility boy elegance ham. He prevent request by if in pleased. Picture too and concern has was comfort. Ten difficult resembled eagerness nor. Same park bore on be. Warmth his law design say are person. Pronounce suspected in belonging conveying ye repulsive",
//   },
// ];

// const getPostsByDB = () => {
//   return posts;
// };
// const getOnePostByDB = (id) => {
//   const onePost = posts.find((p) => p.id == id);
//   return onePost;
// };
// module.exports = {
//   getPostsByDB,
//   getOnePostByDB,
// };

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const postsSchema = new Schema({
  name: String,
  text: String,
});
module.exports = mongoose.model("Post", postsSchema);
