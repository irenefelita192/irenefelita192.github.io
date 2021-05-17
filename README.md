This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can add .env.local

```
NODE_ENV=development
CONFIG_API_URL=http://10.220.0.6
```

**then comment this script at next.config.js as this is only needed for staging and production**

`//assetPrefix: ${CDN_PATH}/assets/microsite,`

**don't forget to uncomment when deloying to staging and production, until found solution to handle on local and stag/prod**

then you can run:

### `yarn dev`

to run the app in the development mode
.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Create new microsite page

### Create [page-name].js

Create file **[page-name].js** under **/pages** folder<br />
the page name will reflect the accessible name on browser,<br />
for example pages/sofa-kuning.js can be accessed as stag.mola.tv/micrositev2/sofa-kuning <br />
(notes: for development temporarily will use /micrositev2 until all microsite finished migrate)

### Applying styles

On your [page-name].js import below:

`import jsxGlobalStyle from "../styles/global.style.js" //this is required as default style and reset css`

and you can create custom jsx style per page under /styles folder, <br />consider the following pattern **[page-name].style.js** to make it easy

`import jsxStyle from "../styles/sofa-kuning.style.js"`

then put below code:

```
 <style jsx>{jsxStyle}</style>
 <style jsx global>
    {jsxGlobalStyle}
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
If the component don't have state or not needed at other pages, please put in the same [page-name].js <br />
example:

```
export const ButtonSK = ({
  handleClick,
  height,
  secondary,
  isMobile,
  text,
}) => {
...
}

class SofaKuning extends React.Component {
...
    render() {
        ...
        <ButtonSK
          text="Cara Main"
          height={61}
          handleClick={this.onClickCaraBermain}
        />
        ...
    }
}
```

If you need to make a component with dynamic import please consider code at _Player.js_
<br />

### Calling API

getServerSideProps function can be used to call api
this is server call
so please use internal ip

```
export async function getServerSideProps() {
  console.log("Running Server Side")
  const URL = `${process.env.CONFIG_API_URL}/alrez/r/web/microsite/sofa-kuning?app_id=${process.env.APP_ID}`

  const rawResponse = await Axios({
    timeout: 5000,
    method: "get",
    url: URL,
    headers: {
      host: "config.core.sstv.local",
    },
  })
    .then((response) => _get(response, "data.data", null))
    .catch((e) => null)

  if (!rawResponse) console.log(`API TIMEOUT: ${URL}`)
  const content = _get(rawResponse, "attributes.response.data", null)

  return {
    props: {
      data: content,
    },
  }
}
```

the function will return as props, so can be called like this:

`const { data } = this.props`
<br />
<br />
<br />
<br />

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
