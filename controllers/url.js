const shortid = require('shortid');
const URL = require('../models/url')

async function handleGenerateNewShortUrl (req, res){
  const body = req.body;
  if(!body.url) return res.status(400).json({error: 'url is required'});
  const shortID = shortid.generate();   //Line 2

  await URL.create({
    shortId: shortID,
    redirectURL: body.url,
    visitHistory: [],
    createdBy: req.user._id,           //req.user from middleware(auth.js)
  });
  
  return res.render("home", {
    id: shortID,
  })
}

/*async function handleGetAnalytics(req, res) {
  const shortId = String(req.params.shortId);
  console.log(typeof shortId); // Should print "string"
  const result = await URL.findOne({ shortId });
  return res.json({ totalClicks: result.visitHistory.length, 
    analytics: result.visitHistory
  })
}
  */

async function handleGetAnalytics(req, res) {
  console.log("req.params:", req.params);
  
  const shortId = req.params.shortId;
  if (!shortId) {
    return res.status(400).json({ error: "ShortId is required" });
  }

  const result = await URL.findOne({ shortId });

  if (!result) {
    return res.status(404).json({ error: "Short URL not found" });
  }

  return res.json({
    totalClicks: result.visitHistory.length,
    analytics: result.visitHistory,
  });
}


module.exports = { handleGenerateNewShortUrl, handleGetAnalytics, };