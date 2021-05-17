import css from 'styled-jsx/css'

export default css`
.container-style {
  background: #0E1820;
  position: relative;
}
.container-style .animate-hero-image {
  height: 100%;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  transform: translate3d(0, 0, 0);
}
.container-style .animate-hero-image .image-list {
  display: flex;
  transform: translate3d(0, 0, 0);
}
.container-style .animate-hero-image .image-list .image-stack:nth-child(1) {

}
.container-style .animate-hero-image .image-list .image-stack img {
  width: calc(100vw/1.45);
}
.container-style .animate-hero-image .image-list {
  animation: moveSlideshow 96s linear infinite;
}
@keyframes moveSlideshow {
  100% { 
    transform: translateX(-1105%);  
  }
}
.container-style .masking {
  background: rgba(0, 0, 0, 0);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 150vw;
}
.container-style .section-title-hero {
  background: rgb(14, 24, 32);
  padding-top: 24px;
  padding-bottom: 40px;
  padding-left: 16px;
  padding-right: 16px;
}
.container-style .section-title-hero .title-text {
  font-family: Public Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 31px;
  text-align: center;
  color: #FFFFFF;
  margin-bottom: 26px;
}
.container-style .section-title-hero .button {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.container-style .section-title-hero .button .button-text {
  padding: 12px 16px;
  background: #1F93FF;
  border-radius: 2px;
}
.container-style .section-title-hero .button .button-text p {
  font-family: Public Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  align-items: center;
  color: #FFFFFF;
}
.section-logo {
  background: #0E1820;
  padding-bottom: 20px;
}
.section-logo .logo-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
.section-logo .logo-container .logo-wrap {
  display: flex;
  align-self: center;
  width: 100%;
  padding: 24px 32px;
  box-sizing: border-box;
}
.section-logo .logo-container .logo-wrap img {
  width: 100%;
}
.section-logo .logo-container .logo-wrap.small {
  display: flex;
  align-self: center;
  justify-content: center;
  width: 100%;
  padding: 24px 32px;
  box-sizing: border-box;
}
// .section-logo .logo-container .logo-wrap.small {
//   width: 54px;
//   height: 54px;
// }
.section-logo .logo-container .logo-wrap img.small {
  width: 54px;
  height: 54px;
}
.section-logo .logo-container-top {
  display: flex;
  justify-content: center;
}
.section-logo .logo-container-top .logo-wrap {
  padding: 20px;
}
.section-logo .logo-container-top .logo-wrap:last-child {
  margin-left: 16px;
}
.section-logo .logo-container-top .logo-wrap img {
  max-width: 124px;
}
.section-logo .logo-container-bottom {
  display: flex;
  justify-content: center;
}
.section-logo .logo-container-bottom .logo-wrap {
  padding: 10px 15px;
  margin-right: 20px;
}
.section-logo .logo-container-bottom .logo-wrap:last-child {
  margin-right: 0px;
}
.section-logo .logo-container-bottom .logo-wrap .small {
  width: 54px;
  height: 54px;
}
.section-logo .logo-container-bottom .logo-wrap img {
  width: 100%;
  max-width: 124px;
}
.section-package {
  padding-top: 64px;
  padding-bottom: 45px;
  background: #0B131B;
  position: relative;
}
.section-package .ornament-right {
  position: absolute;
  top: 0;
  right: 0;
}
.section-package .ornament-left {
  position: absolute;
  bottom: 0;
  left: 0;
}
.section-package .title {
  position: relative;
  font-weight: bold;
  font-size: 21px;
  line-height: 27px;
  color: #FFFFFF;
  max-width: 290px;
  text-align: center;
  margin: auto;
  margin-bottom: 31px;
}
.section-package .package-list {
  position: relative;
}
.section-package .package-list .package-card {
  background: #182632;
  border: 1px solid #233D51;
  border-radius: 3px;
  width: 91.5%;
  margin: auto;
  padding-top: 24px;
  padding-bottom: 16px;
  margin-bottom: 16px;
}
.section-package .package-list .package-card:last-child {
  margin-bottom: 0;
}
.section-package .package-list .package-card .card-title {
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  color: #FFFFFF;
}
.section-package .package-list .package-card .card-price {
  font-weight: bold;
  font-size: 28px;
  line-height: 36px;
  text-align: center;
  color: #FFFFFF;
  margin-top: 4px;
  margin-bottom: 16px;
}
.section-package .package-list .package-card .card-description {
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  color: #C1C2C2;
  max-width: 260px;
  margin: auto;
}
.section-package .package-list .package-card .card-button-wrapper {
  display: flex;
}
.section-package .package-list .package-card .card-button-wrapper .card-button {
  display: inline-block;
  padding: 12px 27px;
  background: #1F93FF;
  border-radius: 2px;
  margin: auto;
  margin-top: 26px;
}
.section-package .package-list .package-card .card-button-wrapper .card-button p {
  font-size: 14px;
  line-height: 16px;
  color: #FFFFFF;
}
.section-package .package-other {
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: 32px;
}
.section-package .package-other .button {
  color: #C1C2C2;
  padding: 12px 16px;
  border: 1px solid #C1C2C2;
  font-size: 14px;
  line-height: 16px;
}
.section-content-category {
  padding-top: 32px;
  padding-bottom: 32px;
  background: #0D161E;
}
.section-media {
  position: relative;
  padding-top: 40px;
  background: #0E1820;
}
.section-media .ornament-right {
  position: absolute;
  top: 0;
  right: 0;
}
.section-media .ornament-left {
  position: absolute;
  bottom: 0;
  left: 0;
}
.section-media .media-title {
  position: relative;
  font-weight: bold;
  font-size: 21px;
  line-height: 27px;
  text-align: center;
  color: #FFFFFF;
  max-width: 320px;
  margin: auto;
}
.section-media .media-description {
  position: relative;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  color: #C1C2C2;
  max-width: 320px;
  margin: 8px auto 20px auto;
}
.section-media .media-img {
  position: relative;
  max-width: 328px;
  margin: auto;
}
.section-media .media-img img {
  width: 100%;
}
.section-faq {
  padding-top: 80px;
  background: #0E1820;
}
.section-faq .faq-title {
  font-weight: bold;
  font-size: 21px;
  line-height: 27px;
  text-align: center;
  color: #FFFFFF;
  margin-bottom: 32px;
}
.section-faq .faq-list .card-wrap {
  max-width: 91.5%;
  margin: auto;
  margin-bottom: 8px;
}
.section-faq .faq-list .card-wrap:last-child {
  margin-bottom: 0;
}
.section-closing {
  background: #0E1820;
  padding-top: 101px;
  padding-bottom: 70px;
  position: relative;
}
.section-closing .ornament-left {
  position: absolute;
  top: 12%;
  left: 0;
}
.section-closing .title {
  position: relative;
  font-weight: bold;
  font-size: 21px;
  line-height: 27px;
  text-align: center;
  color: #FFFFFF;
  max-width: 328px;
  margin: auto;
}
.section-closing .button-wrap {
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: 32px;
}
.section-closing .button-wrap .button {
  padding: 12px 16px;
  background: #1F93FF;
  border-radius: 2px;
}
.section-closing .button-wrap .button p {
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: #FFFFFF;
}
.footer-container {
  background: #0e1820;
  padding-bottom: 44px;
}
.footer-container .footer-wrap {
  max-width: 91.5%;
  margin: auto;
}
`