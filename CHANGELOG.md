### [v1.9.0]

> 2022-09-26

-   Replace email column in provider list with cashless service (IP and or OP) at page partner
### [v1.8.0]

> 2022-08-02

-   Update partner page api from /hopitals to /hospitals/partner

### [v1.7.0]

> 2022-06-28

-   If user go to /get-app page (by url or by qr), on mobile browser if url has param like utm_source, utm_medium, utm_campaign, then user will be redirected to App Store or Play Store along with the utm param (related PRD - P025). If on desktop then will be redirected to home page. Also save to cookie (desktop and mobile) when there is utm, so everytime user navigate within vida page and click download, the utm will always be passed.
-   Tidy the look for no javacsript info

### [v1.6.0]

> 2022-06-21

-   Add disclaimer / notes "Subject to change. Please contact us for more detail and assistance." at partner page
-   change "our partner" to "partner hospital" at footer

### [v1.5.0]

> 2022-05-20

-   Set X-Frame-Options to SAMEORIGIN to prevent vida web is emebeded in iframe, except for /brochure, /benefit-table, and /privacy which is currently used in apps as iframe

### [v1.4.1]

> 2022-05-17

-   Fix promo page SEO. Add promo image as seo image for /promo/id, but use vida logo image for /promo
-   Fix logo image for seo image facebook by changing size to 200x200

### [v1.4.0]

> 2022-05-09

-   On download page, if url has param like utm_source, utm_medium, utm_campaign, then when click on download button, user will be redirected to App Store or Play Store along with the utm param (PRD - P025). Then save to cookie when there is utm, so everytime user navigate within vida page and click download, the utm will always be passed.

-   Re-add promo page

### [v1.3.0]

> 2022-03-17

-   Add social media links at footer

### [v1.2.1]

> 2022-03-11

-   Remove prefix word `Vida |` from default when reading meta title from strapi
-   Change alt name for logo form `vida-logo` to `Vida` to fix mobile serp

### [v1.2.0]

> 2022-02-14

-   Hide promo page temporary
-   Change CI login from google-github-actions/setup-gcloud@master to google-github-actions/setup-gcloud@v0
-   Fix styling on partner page : search/filter, pagination on mobile show less pages
-   Fix showing current year on mobile burger menu footer

> 2022-02-09

-   Add `reset / x button` on search box at partner page
-   Reset `go to` page input text when re-loading data to first page
-   Fix search partner when changing from City/Province/Country option to Name search option
-   Show `loading` and `no data` info on mobile partner table

> 2022-01-25

-   Revert partner axa page to partner with backend api

> 2022-01-25

-   New partner page using AXA Api and backup old partner page

> 2022-01-12

-   Update promo detail page UI based on mock up API
-   Remove locale when calling mock api
-   Update accordion component props to show arrow up and down and able to set default is open
-   Fix show current year at footer copyright by replacing variable from strapi data
-   Enhancement: separate brochure download function for web and apps webview

> 2021-12-17

-   Fix rounding calculation for handphone image's width at /download page

> 2021-12-16

-   Additional cloudrun deploy to asia-southeast1 (singapore) for drc
-   Improvement on header desktop and mobile rerender using React.memo
-   New promotion page at `/promo` and `/promo/:slug`
-   Fix .env.sample to .env.dev.sample and .env.prod.sample and adjust on the CI workflow
-   Refactor code: use global function to call api by path, remove redundanct color theme

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
