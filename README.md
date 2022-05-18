# Wrapbook

## Available Scripts
In the project directory, you can run:

### `npm install`
### `npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

View live (but with errors on page redirect 😅) [here](https://wrapbook-nicole.netlify.app/)
Use these credentials to log in and continue through the project flow:

Email: `admin@test.com`
Password: `password`

### Project Creation

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and uses 
- [Theme-ui](https://theme-ui.com/)
- [Emotion](https://emotion.sh/docs/introduction)
- [Firebase Authentication](https://firebase.google.com/docs/auth)
- [Netlify Hosting](https://www.netlify.com/)

The design is based off of a [Figma](https://www.figma.com/file/emF3ph53KWyCzwD5XjgGWd/Wrapbook-Frontend-Developer-Challenge?node-id=0%3A1) design.

### Goals:

1. Views that look as close as possible to the mocks
2. Fetch the list of people from this [endpoint](https://castandcrew.herokuapp.com/people)

### Considerations in the process:

- Regarding goal #1 I believe that I made the UI as close as possible to the wireframes. I made some decisions on the type of navigation links to show based on whether or not the user was logged in. 
- Based on the data provided in the provided API, some information is not dynamic on the Employee cards. 
- 'SF Pro Display' was the mocked font, however I tried to find one similar in google fonts and landed on 'Open Sans'. 
- I wasn't able to render the the Figma assets regarding the icons and instead chose to render the icons by using `Font Awesome`
- Regarding goal #2, if the project is run locally, the project flows as it is meant to. However, after handling CORS by using a proxy, then deploying to Netlify Hosting, I noticed the functionality was lost in the authentication process. This is why I must provide User login credentials. This should be fixed, however, for the sake of time I provided the credentials. In hindsight, it was meant to be a single page app, and maybe different routes were not necessary, and instead, I should have chosen to implement different views at the same route instead.



