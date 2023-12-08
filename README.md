# ProfileStation

## Project Overview

_ProfileStation_ is a small-scale web application built to showcase backend skills using Node.js, Express, and templating engines such as Pug, EJS, and Handlebars (HBS). It provides a user authentication system where users can sign up or sign in to view a personalized profile page.

## Key Features

- Simplified user authentication system.
- Personalized profile display after successful authentication.
- Server-side rendering of templates using Pug, EJS, and HBS.
- Static assets management for delivering frontend content.
- Responsive design for a consistent experience across various devices.

## Motivation

This project serves as a hands-on practice environment to fortify an understanding of Node.js and the Express.js framework, with an emphasis on server-side rendering through various templating engines. It allows examination of the differences and use-cases between Pug, EJS, and HBS in a controlled and focused manner.

## Technologies Used

- **Backend**: Node.js, Express.js
- **Templating Engines**: Pug, EJS, Handlebars (HBS)
- **Frontend**: HTML5, CSS3, Vanilla JavaScript

## Setup and Installation

Clone the project repository by running:

```bash
git clone https://github.com/m-mdy-m/ProfileStation.git
```
```bash
cd ProfileStation
```

Install the required dependencies by executing:

```bash
npm install
```

Start the server locally by running:

```bash
npm run start
```

The application will be accessible at [http://localhost:3000](http://localhost:3000). The routes include:

- `/` for the home page.
- `/signUp` for user registration.
- `/signIn` for user login.

## How to Use

- Visit the home page and navigate through sign-in and sign-up pages via the header.
- Sign up to create a new user profile.
- Sign in with your credentials to view your profile page.
- Any unhandled routes will direct you to a custom 404 page.

## Contributing

Contributions are what make the open-source community a fantastic place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

To contribute to _ProfileStation_, please follow these steps:

1. Fork the project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.