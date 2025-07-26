const User = require('../models/user');
const { v4: uuidv4 } = require('uuid');
const {setUser} = require('../service/auth');


async function handleUserSignup(req, res) {
  try {
    const { name, email, password } = req.body;

    //Existing user check
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.render('signup', {
        error: "Email already registered. Please login.",
        name,
        email,
        password,
      });
    }

    await User.create({ name, email, password });

  } catch (err) {
    console.error("Signup Error:", err);

    if (err.code === 11000 && err.keyPattern?.email) {
      return res.render('signup', {
        error: "Email already exists.",
      });
    }

    return res.status(500).render('signup', {
      error: "Something went wrong. Please try again.",
    });
  }
}


/*
//No error check
async function handleUserSignup(req, res) {
const { name, email, password } = req.body;
await User.create({
  name,
  email,
  password,
});
return res.render("/");
}


async function handleUserLogin(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });
  if(!user) 
    return res.render('/login', {
    error: "Invalid user or Password"
  });

  const sessionId = uuidv4();
  setUser(sessionId, user);
  res.cookie("uid", sessionId);
  return res.redirect("/");
  }
*/


async function handleUserLogin(req, res) {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email, password });

    if (!user) {
      return res.render('login', {
        error: "Invalid email or password.",
      });
    }

    const sessionId = uuidv4();
    setUser(sessionId, user); 
    res.cookie("uid", sessionId, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // ensures it's secure in prod
      maxAge: 1000 * 60 * 60 * 24, // 1 day
    });

    return res.redirect("/");

  } catch (err) {
    console.error("Login error:", err);
    return res.status(500).render('login', {
      error: "Internal server error. Try again later.",
    });
  }
}


module.exports = { handleUserSignup, handleUserLogin, }