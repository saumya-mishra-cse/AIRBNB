const express=require ("express");
const router = express.Router({mergeParams:true})
const wrapAsync = require("../utils/wrapasync.js")
const ExpressError = require("../utils/ExpressError.js")
const Review=require("../models/review.js")
const Listing = require("../models/listing.js")
const {validateReview, isReviewAuthor} = require("../middleware.js")
const {isLoggedIn} = require("../middleware")

const reviewController = require("../controllers/review.js")
//reviews route
//POST
router.post("/",
    isLoggedIn,
    validateReview, wrapAsync(reviewController.createReview));

//delete review route
router.delete("/:reviewId",
    isLoggedIn,
    isReviewAuthor,
    wrapAsync(reviewController.destroyReview)
)

module.exports = router