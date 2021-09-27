---
title: transpyr-api
date: 2021-09-27T21:32:17.659Z
description: Backend for Transpyr, handling creation, querying, and booking of
  events, auth, and user operations.
technologies:
  - node
  - express
  - mongodb
  - ""
docs: https://github.com/swelbourn/transpyr-api
repo: https://github.com/swelbourn/transpyr-api
---
# **transpyr-api powers Transpyr's event, authorization, and user management operations.**

## Features:

* Account creation, modification, and deactivation.
* Search for events by keyword, or query with the ability to sort, paginate, and filter by fields or location radius.
* Create and publish events.
* "Me" routes for authorized users to fetch their own bookings and events.
* Validate and create bookings.
* Create, query, and resolve refund requests.
* Handles checkout sessions with Stripe and leverages Stripe webhooks to create bookings.
* Automatically sends emails to attendees and organizers for important actions.
* Signs and decodes JSON web tokens for authorization.
* Protects restricted routes based on bearer token authorization and user roles.
* Error handling middleware gracefully handles operational errors and logs unexpected ones.
* More powerful CRUD operations for admins, including the ability to view and modify unpublished events.
* Streams event/user images from Transpyr's Amazon S3 bucket.

## Technologies Used:

* **Express**
* **Mongoose** ODM for **MongoDB**
* **Pug** for email templates
* **Nodemailer** for sending emails with **Sendgrid**
* **Multer** for multipart data handling
* **Sharp** for image manipulation
* **Stripe** library for working with Stripe Checkout 
* **bcrypt** for password hashing
* **jsonwebtoken** library