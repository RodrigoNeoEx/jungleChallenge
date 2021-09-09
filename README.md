# Jungle Devs - React Challenge #001

#### Project proposed as a technical challenge for [Jungle Devs](https://www.jungledevs.com/)

<hr/>

## Scripts required to install and use the App

### `npm install`

Install all used dependencies

Dependencies/libs used:

- SASS
- React Icons
- Axios

### `npm start`

Starts the App in development environment.

Utilize [http://localhost:3000](http://localhost:3000) para visualizar seu desenvolvimento.


## If App crash cause of dep updates, use .env with the following environment variable

### `SKIP_PREFLIGHT_CHECK=true`

<hr/>

## Skills used during development

- Dynamic Components
- `React Icons` for customizing and creating certain components
- `BEM CSS Pattern `
- `SASS` / `SCSS`
- `JavaScript ES6`

<hr/>

## Description

**Challenge goal**: The purpose of this challenge is to give a general idea of how React works and how you can use it to create simple reactive applications. You’ll be implementing a simplified version of Hapu’s ‘Become a Nanny Share Host’ view. The concepts that you’re gonna apply are:

- JSX;
- Components, props and state;
- Lifecycle Methods;
- Responsive design with CSS media-queries;
- API calls;
- Error handling;
- Loading states;
- SEO & accessibility;
- A/B tests;
- Production builds.

**Target level**: This is an all around challenge that cover both juniors and experience devs based on the depth of how the concepts were applied.

## Resources

**Design**: [Figma](https://www.figma.com/file/iBxoiuoSXy3SiOAnwXo2Np/Frontend-%E2%80%93-Challenge-1)

## Acceptance criteria

- Clear instructions on how to run the application in development mode
- Clear instructions on how to create production builds
- Logos should be exported in SVG
- Implement the mobile version using CSS Media Queries
- Hero section should have an A/B test, persistent for the user, that will either display the design version or:
  - Title: Create the childcare you need at a price you can afford
  - Description: Connect with other local families to share a nanny from as low as $10.00/hr each. Create your family profile today to get started.
- Newsletter integration to be done using the following endpoint:
  - POST https://api.jungledevs.com/api/v1/challenge-newsletter/ with body:
  ```json
  {
    "name": "NAME",
    "email": "EMAIL"
  }
  ```
- Proper HTML structure for good SEO and accessibility
- Proper loading and error handling

<hr/>

# Deploy

#### 
Deployed through the [Vercel](https://vercel.com/) platform. 
#### Deploy Link: <a href="https://jungle-challenge-pi.vercel.app/">jungle-challenge</a>

<hr/>
