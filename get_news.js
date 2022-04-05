const {client}=require("./client");

// add a news
// client.addNews(
//   {
//       id:"4",
//     title: "Title news 4",
//     body: "Body content 4",
//     postImage: "Image URL here",
//   },
//   (error, news) => {
//     if (error) throw error;
//     console.log("Successfully created a news.");
//   }
// );
// client.getAllNews({}, (error, news) => {
//   if (error) throw error
//     console.log(news);
// });


// edit a news
// client.editNews(
//   {
//     id: 2,
//     body: "Body content 2 edited.",
//     postImage: "Image URL edited.",
//     title: "Title for 2 edited.",
//   },
//   (error, news) => {
//     if (error) throw error;
//     console.log("Successfully edited a news.");
//   }
// );


// client.deleteNews(
//   {
//     id: 2,
//   },
//   (error, news) => {
//     if (error) throw error;
//     console.log("Successfully deleted a news item.");
//   }
// );
// client.getAllNews({}, (error, news) => {
//   if (error) throw error
//     console.log(news);
// });