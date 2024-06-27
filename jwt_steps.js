/**
 * install jsonwebtoken
 * require(json web token )
 * jwt.sign(payload,secret,{expiresIn:})
 * token client
 */

/**
 * how to store token in the client side.
 *
 * 1.memory
 * 2. memory----> ok type
 * 3. local storage -->ok type (xss)
 * 4. cookies : http only
 * 5.
 */

/**
 * 1. set cookies with http only
 * 2.
 */

// app.post("/jwt", async (req, res) => {
//   const user = req.body;
//   console.log(user);
//   const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
//     expiresIn: "1h",
//   });

//   res
//     .cookie("token", token, {
//       httpOnly: true,
//       secure: false,
//       sameSite: "none",
//     })

//     .send({ success: true });
// });


// 1. // app.use(
//   cors({
//     origin: ["http://localhost:5173/"],
//     credentials: true,
//   })
// );

/**
 * 2. client site axios settings
 */