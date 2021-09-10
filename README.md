This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can add .env.local

```
REACT_APP_ENV=production
BASE_API=https://strapi-y5loyvex6a-et.a.run.app
ASSET_PREFIX=
```

then you can run:

### `yarn dev`

to run the app in the development mode
.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.


## Static HTML Deployment

to build from staging env (.defaultenv/staging) and export, run:

### `yarn build:stag`

to build from production env (.defaultenv/production) and export, run:

### `yarn build:prod`



## Create new microsite page

### Create pages

Create file **[page-name].js** under **/pages** folder<br />
or folder **/pages/[page-name]/index.js <br/>
the page name will reflect the accessible name on browser,<br />
for example pages/overview.js can be accessed as ...<br />
<br/><br/>
then create folder **[page-name]** under **/screen\*\* with index.js and styles inside

### Applying styles

On your [page-name].js on /screen you can create custom jsx style per page under /styles folder, <br />

`import styles from "./styles.js"`

then put below code:

```
 <style jsx>{styles}</style>
 <style jsx global>
    {globalStyles}
 </style>
```

### Applying SEO and FB Pixel and GTM

Always wrap you page with Layout.js component <br />
`import Layout from "../components/layout"`

```
<Layout title={seoTitle} description={seoDescription}>
//your content here
</Layout>
```

### Create component

If you need to make a component with its own state or can be import dynamically, <br />
create **[component-name].js** under **/components** folder

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
