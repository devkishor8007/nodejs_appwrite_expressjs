const sdk = require("node-appwrite");

exports.userappwrite = function () {
  const client = new sdk.Client();

  client
    .setEndpoint("https://127.0.0.1/v1")
    .setProject(process.env.PROJECT_ID)
    .setKey(
      "19e27b202e7c3bd88cbe7fdd48abe966f3c79c14301e5865e0551a24d1479a371ad91d18ece2c8a86318b8452be0431a45bd4bc6c07a8899c8875b46a93a46688571934683c3fdc0ac8043f6620c8b60c2640fa670a871ab805e801addd6f74a060004796148312661d2003e4f3e025bb3d9717263424619e9c2a5a10503546b"
    )
    .setSelfSigned(true);

  const auth = new sdk.Users(client);
  return auth;
};

exports.databaseappwrite = function () {
  const client = new sdk.Client();

  client
    .setEndpoint("https://127.0.0.1/v1")
    .setProject(process.env.PROJECT_ID)
    .setKey(
      "19e27b202e7c3bd88cbe7fdd48abe966f3c79c14301e5865e0551a24d1479a371ad91d18ece2c8a86318b8452be0431a45bd4bc6c07a8899c8875b46a93a46688571934683c3fdc0ac8043f6620c8b60c2640fa670a871ab805e801addd6f74a060004796148312661d2003e4f3e025bb3d9717263424619e9c2a5a10503546b"
    )
    .setSelfSigned(true);

  const users = new sdk.Database(client);

  return users;
};
