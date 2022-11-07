import bcrypt from "bcrypt";

const saltRounds = 12;
// extra computations(tilføjer: igen og igen og så hasher den) = takes longer
const plaintextPassword = "hunter12";

//hash og compare i bcrypt
const encryptedPasswordResult = await bcrypt.hash(plaintextPassword, saltRounds);
console.log(encryptedPasswordResult);
// ved at genkøre er det forskelligt både salt og hash
// ergo forskelligt hver gang MEN det kan sammenlignes

const encryptedPassword = "$2b$12$S88.Hw43XhIRc.VrOKFflOAAbpq5Eeui4xJId3I.OACZfGvMhsyAS";

const passwordComparison = await bcrypt.compare(plaintextPassword, encryptedPassword);
console.log(passwordComparison)

