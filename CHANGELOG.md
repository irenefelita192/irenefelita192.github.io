### [v1.1.6]

> 2021-12-01

-   Fix bug at homepage icon animation, show scroll animation only when family image on revolve section is fully loaded [Issue #227](https://github.com/lippolife/vida-landing/issues/227)
-   Fix add min height on family image to handle icon showing before family image on first section is loaded [mobile & tablet]
-   Update logic when selecting language: only reload page if current language is different with language that want to be selected

### [v1.1.5]

> 2021-11-25

-   Remove /product-information-temp

> 2021-11-24

-   Content: Update `Table Manfaat` accomodation cost section on room terms at /benefit-table and /product-information

### [v1.1.4]

> 2021-11-24

-   Update tnc
-   Change back /product-information content from tnc to product info

### [v1.1.3]

> 2021-11-18

-   Fix set cookie language to domain (.kenalvida.com)

### [v1.1.2]

> 2021-11-17

-   Fix wording `dimana` to `di mana`
-   Privacy and terms footer read seo title based on language
-   Not Found page content based on language

### [v1.1.1]

> 2021-11-16

-   Fix first paint pages to add time to load content
-   Remove yoastSEOPlugin

### [v1.1.0]

> 2021-11-16

-   Read SEO title, description, and keywords from strapi for home, product, and download page
-   Add home page alt on image and set min height for mobile home

### [v1.0.1]

> 2021-11-15

-   Fix partner page input placeholder `page number` read bahasa from strapi
-   Fix table first column should be left aligned in safari (ios) on benefit table and product information page

### [v1.0.0]

> 2021-11-12

-   Change CI deployment to generate env from .env.sample to handle read env from build time
-   Change docker file to use `yarn build` then `yarn start` for production

### [v0.2.0]

> 2021-11-11

-   About page layout using [fullpage.js](https://alvarotrigo.com/fullPage/)

> 2021-11-8

-   Fix missing seo title

> 2021-11-5

-   Add product info page

> 2021-11-4

-   Fix gtag title based on language
-   Fix redirect to appstore and playstore
