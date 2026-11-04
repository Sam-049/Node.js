//* built in nodejs module used for security related tasks that provides cryptographic functionality.
//? It allows you to handle operations like data encryption, decryption, hashing, creating digital signatures, and generating secure random values.
/**
 * security related tasks,
 * creating random UUID,
 * creating secure tokens,
 * hashing data,
 * to verify the data has bee changed or not,
 * encrypt/decrypt
 */
import crypto from "node:crypto";

//most used methods from crypto
const requestId = crypto.randomUUID(); //Universally Unique Identifier like //* user_id, session_id
console.log({ requestId });

//secure random bytes for password reset token, email verification token, session secret, api keys as well
const resetToken = crypto.randomBytes(16).toString("hex"); //* this will be a 32 character string (1 byte will become 2 char in hex format string)
console.log({ resetToken });

// hashing is one way cryptographic operation
const text = "hello Node";
const hash = crypto.createHash("sha256").update(text).digest("hex"); //sha256 is an algorithm and test is what we going to hash and hex is the format
console.log({ hash });


/** in normal hash we have data which is converting to hash
 * but in HMAC, we have data + secret and this is signed Hash
 *
 * useful when we implement webhook, signed tokens,
 **/

const secret = "my-super-secret-key";
const message = "user_id=1";

const signature = crypto
  .createHmac("sha256", secret)
  .update(message)
  .digest("hex");
console.log({ signature });

const signatureVerify = crypto // this we would be gettimg from somewhere else in real project. here is the demonstartion 
  .createHmac("sha256", secret)
  .update(message)
  .digest("hex");
console.log(
  `Signature is able to verify and matched ${signature === signatureVerify}`,
);