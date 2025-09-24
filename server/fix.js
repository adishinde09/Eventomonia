import bcrypt from "bcrypt";

bcrypt.hash("admin123", 10, (err, hash) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(hash);
});
