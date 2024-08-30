import crypto from "crypto";


/* STRING GENERATOR */
/* Consoles a string of 256 random letters */
/* Change the number if you want a longer or shorter string,
1 letter is 2 bytes so the nr 128 will generate 256 letters */

console.log(crypto.randomBytes(128).toString("hex"))