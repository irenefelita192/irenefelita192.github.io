import css from 'styled-jsx/css'

export default css`
.container-style {
  position: relative;
}
.container-style::-webkit-scrollbar {
  display: none;
}
.hero-image-wrapper {
  background: rgb(11, 19, 27);
  position: relative;
}
.hero-image-wrapper .image-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}
.hero-image-wrapper .image-list .image-wrap {
  position: relative;
}
.image-wrap:nth-child(1) {
  transform: translateX(400%);
}
.image-wrap:nth-child(1) img {
  width: 100%;
}
.image-wrap:nth-child(1) img:nth-child(1) {
  position: relative;
  animation-name: crossFading;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-duration: 16s;
  animation-delay: 0s;
  z-index: 4;
}
.image-wrap:nth-child(1) img:nth-child(2) {
  position: absolute;
  top: 0;
  left: 0;
  animation-name: crossFading;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-duration: 16s;
  animation-delay: 4s;
  z-index: 3;
}
.image-wrap:nth-child(1) img:nth-child(3) {
  position: absolute;
  top: 0;
  left: 0;
  animation-name: crossFading;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-duration: 16s;
  animation-delay: 8s;
  z-index: 2;
}
.image-wrap:nth-child(1) img:nth-child(4) {
  position: absolute;
  top: 0;
  left: 0;
  animation-name: crossFading;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-duration: 16s;
  animation-delay: 12s;
  z-index: 1;
}
.image-wrap:nth-child(2) {
  transform: translateX(400%);
}
.image-wrap:nth-child(2) img {
  width: 100%;
}
.image-wrap:nth-child(2) img:nth-child(1) {
  position: relative;
  animation-name: crossFading;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-duration: 16s;
  animation-delay: 2s;
  z-index: 4;
}
.image-wrap:nth-child(2) img:nth-child(2) {
  position: absolute;
  top: 0;
  left: 0;
  animation-name: crossFading;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-duration: 16s;
  animation-delay: 6s;
  z-index: 3;
}
.image-wrap:nth-child(2) img:nth-child(3) {
  position: absolute;
  top: 0;
  left: 0;
  animation-name: crossFading;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-duration: 16s;
  animation-delay: 10s;
  z-index: 2;
}
.image-wrap:nth-child(2) img:nth-child(4) {
  position: absolute;
  top: 0;
  left: 0;
  animation-name: crossFading;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-duration: 16s;
  animation-delay: 14s;
  z-index: 1;
}
.image-wrap:nth-child(3) {
  transform: translateX(400%);
}
.image-wrap:nth-child(3) img {
  width: 100%;
}
.image-wrap:nth-child(3) img:nth-child(1) {
  position: relative;
  animation-name: crossFading;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-duration: 16s;
  animation-delay: 0s;
  z-index: 4;
}
.image-wrap:nth-child(3) img:nth-child(2) {
  position: absolute;
  top: 0;
  left: 0;
  animation-name: crossFading;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-duration: 16s;
  animation-delay: 4s;
  z-index: 3;
}
.image-wrap:nth-child(3) img:nth-child(3) {
  position: absolute;
  top: 0;
  left: 0;
  animation-name: crossFading;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-duration: 16s;
  animation-delay: 8s;
  z-index: 2;
}
.image-wrap:nth-child(3) img:nth-child(4) {
  position: absolute;
  top: 0;
  left: 0;
  animation-name: crossFading;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-duration: 16s;
  animation-delay: 12s;
  z-index: 1;
}
.image-wrap:nth-child(4) {
  transform: translateX(400%);
}
.image-wrap:nth-child(4) img {
  width: 100%;
}
.image-wrap:nth-child(4) img:nth-child(1) {
  position: relative;
  animation-name: crossFading;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-duration: 16s;
  animation-delay: 2s;
  z-index: 4;
}
.image-wrap:nth-child(4) img:nth-child(2) {
  position: absolute;
  top: 0;
  left: 0;
  animation-name: crossFading;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-duration: 16s;
  animation-delay: 6s;
  z-index: 3;
}
.image-wrap:nth-child(4) img:nth-child(3) {
  position: absolute;
  top: 0;
  left: 0;
  animation-name: crossFading;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-duration: 16s;
  animation-delay: 10s;
  z-index: 2;
}
.image-wrap:nth-child(4) img:nth-child(4) {
  position: absolute;
  top: 0;
  left: 0;
  animation-name: crossFading;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-duration: 16s;
  animation-delay: 14s;
  z-index: 1;
}
@keyframes crossFading {
  0% {
    opacity:1;
  }
  12% {
    opacity: 1;
  }
  16% {
    opacity: 1;
  }
  25% {
    opacity:0;
  }
  75% {
    opacity:0;
  }
  88% {
    opacity: 0;
  }
  100% {
    opacity:1;
  }
}
.animate-child-1 {
  transform: translateX(0%) !important;
  transition: transform .7s ease-in;
}
.animate-child-2 {
  transform: translateX(0%) !important;
  transition: transform .8s ease-in;
}
.animate-child-3 {
  transform: translateX(0%) !important;
  transition: transform .9s ease-in;
}
.animate-child-4 {
  transform: translateX(0%) !important;
  transition: transform 1s ease-in;
}
.mask-img {
  position: absolute;
  z-index: 3;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0);
}
.content-hero {
  position: absolute;
  z-index: 4;
  color: #FFFFFF;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.content-hero .hero-tag-text {
  font-size: 2.4rem;
  line-height: 3.1rem;      
  text-align: center;
}
.content-hero .hero-title-text {
  font-weight: bold;
  font-size: 4.8rem;
  line-height: 5.6rem;
  margin: 1.6rem 0;
  text-align: center;
}
.content-hero .hero-description-text p {
  font-size: 2.4rem;
  line-height: 3.6rem;
  max-width: 60%;
  text-align: center;
  padding: 0 1.6rem;
  margin: auto;
}
.section-main-content {
  background: #0B131B;
}
.section-title-hero {
  position: relative; 
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2.4rem;
  padding-bottom: 3.2rem;
}
.section-title-hero .section-logo-ornament-right {
  position: absolute;
  right: 0;
  top: 0;
  width: 25%;
}
.section-title-hero .section-logo-ornament-right img {
  width: 100%;
}
.section-title-hero  .title-text {
  position: relative;l
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 36px;
  text-align: center;
  color: #FFFFFF;
}
.section-title-hero .hero-button {
  position: relative;
  display: flex;
  padding: 1.6rem 2.4rem;
  background-color: #1F93FF;
  margin-top: 4rem;
  border-radius: .2rem;
  transition: background-color .3s ease-in-out;
}
.section-title-hero .hero-button:hover {
  cursor: pointer;
  background-color: #41a4ff;
}
.section-title-hero .hero-button p {
  font-weight: bold;
  font-size: 1.6rem;
  line-height: 1.8rem;
  color: #FFFFFF;
}
.section-logo-list {
  display: flex;
  justify-content: center;
  position: relative;
}
.section-logo-list .logo-list-wrap {
  z-index: 2;
  width: 14.2rem;
  height: 12.6rem;
  padding: 0 1.6rem;
  display: flex;
  align-items: center;
}
.section-logo-list .logo-list-wrap img {
  width:100%;
  margin: auto;
}
.section-logo-list .logo-list-wrap small {
  width: 5.4rem;
}
.section-logo-list .logo-list-wrap-small {
  z-index: 2;
  width: auto;
  height: 12.6rem;
  padding: 0 1.6rem;
  display: flex;
  align-items: center;
}
.section-logo-list .logo-list-wrap-small img {
  width:100%;
  margin: auto;
}
.section-logo-list .logo-list-wrap-small .small {
  width: 5.4rem;
}
.section-package-subs {
  padding-top: 6.9rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding-bottom: 8rem;
  padding-left: 12rem;
  padding-right: 12rem;
}
.section-package-subs .package-title-subs {
  font-weight: bold;
  font-size: 3.2rem;
  line-height: 4.2rem;
  text-align: center;
  color: #FFFFFF;
  max-width: 41.9rem;
  margin-bottom: 3.2rem;
}
.section-package-subs .package-other {
  font-size: 1.6rem;
  line-height: 1.8rem;
  color: #C1C2C2;
  border: 1px solid #C1C2C2;
  border-radius: .2rem;
  padding: 1.6rem 2.4rem;
  margin-top: 4rem;
}
.section-package-subs .package-other:hover {
  cursor: pointer;
  color: #ffffff;
  border: 1px solid #ffffff;
  transition: all .3s ease-in;
}
.section-package-subs .package-card-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1.6rem;
  z-index: 2;
}
.section-package-subs .package-card-list .package-card-wrap {
  background: #19242D;
  border: 1px solid #233D51;
  border-radius: 3px;
  padding: 2.4rem 4.4rem;
}
.section-package-subs .package-card-list .package-card-wrap .package-card-title {
  font-weight: bold;
  font-size: 1.4rem;
  line-height: 2.1rem;
  text-align: center;
  color: #FFFFFF;
  margin-bottom: .4rem;
}
.section-package-subs .package-card-list .package-card-wrap .package-card-price {
  font-weight: bold;
  font-size: 3.2rem;
  line-height: 4.2rem;
  text-align: center;
  color: #FFFFFF;
  margin-bottom: 1.2rem;
}
.section-package-subs .package-card-list .package-card-wrap .package-card-description {
  font-size: 1.4rem;
  line-height: 2.1rem;
  text-align: center;
  color: #C1C2C2;
  max-width: 28.1rem;
  margin-bottom: 2.4rem;
}
.package-card-list .package-card-wrap .package-button-wrap {
  display: flex;
  justify-content: center;
}
.package-card-list .package-card-wrap .package-button-wrap .package-card-button {
  padding: 1.2rem 2.7rem;
  display: inline-block;
  background-color: #1F93FF;
  border-radius: 2px;
  transition: background-color .3s ease-in-out;
}
.package-card-list .package-card-wrap .package-button-wrap .package-card-button:hover {
  cursor: pointer;
  background-color: #41a4ff;
}
.package-card-list .package-card-wrap .package-button-wrap .package-card-button p {
  font-size: 1.4rem;
  line-height: 1.6rem;
  text-align: center;
  color: #FFFFFF;
}
.section-package-subs .package-card-list-2 {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1.6rem;
  z-index: 2;
}
.section-package-subs .package-card-list-2 .package-card-wrap {
  background: #19242D;
  border: 1px solid #233D51;
  border-radius: 3px;
  padding: 2.4rem 4.4rem;
}
.package-card-list-2 .package-card-wrap .package-card-title {
  font-weight: bold;
  font-size: 1.4rem;
  line-height: 2.1rem;
  text-align: center;
  color: #FFFFFF;
  margin-bottom: .4rem;
}
.package-card-list-2 .package-card-wrap .package-card-price {
  font-weight: bold;
  font-size: 3.2rem;
  line-height: 4.2rem;
  text-align: center;
  color: #FFFFFF;
  margin-bottom: 1.2rem;
}
.package-card-list-2 .package-card-wrap .package-card-description {
  font-size: 1.4rem;
  line-height: 2.1rem;
  text-align: center;
  color: #C1C2C2;
  max-width: 28.1rem;
  margin-bottom: 2.4rem;
}
.package-card-list-2 .package-card-wrap .package-button-wrap {
  display: flex;
  justify-content: center;
}
.package-card-list-2 .package-card-wrap .package-button-wrap .package-card-button {
  padding: 1.2rem 2.7rem;
  display: inline-block;
  background-color: #1F93FF;
  border-radius: 2px;
  transition: background-color .3s ease-in-out;
}
.package-card-list-2 .package-card-wrap .package-button-wrap .package-card-button:hover {
  cursor: pointer;
  background-color: #41a4ff;
}
.package-card-list-2 .package-card-wrap .package-button-wrap .package-card-button p {
  font-size: 1.4rem;
  line-height: 1.6rem;
  text-align: center;
  color: #FFFFFF;
}
.section-package-subs .logo-ornament-left {
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 1;
}
.section-content-category {
  background: #0D161E;
  padding-left: 12rem;
  padding-bottom: 6rem;
  padding-top: 6rem;
}
.section-content-category .slider-container {
  padding-top: 6rem;
}
.section-content-category .slider-container:last-child {
  padding-bottom: 6rem;
}
.section-content-category .slider-container .slider-title {
  font-weight: bold;
  font-size: 3.6rem;
  line-height: 4.6rem;
  color: #FFFFFF;
}
.section-content-category .slider-container .slider-description {
  font-size: 2.4rem;
  line-height: 3.6rem;
  color: #C1C2C2;
  margin-top: .8rem;
  margin-bottom: 2.4rem;
}
.section-content-category .slider-container .slider-wrapper {
  overflow-x: auto;
  white-space: nowrap;
}
// .section-content-category .slider-container .slider-wrapper::-webkit-scrollbar {
//   display: none;
// }
.section-content-category .slider-container .slider-wrapper .slider-card {
  display: inline-block;
  border-radius: .2rem;
  margin-right: .8rem;
}
.section-content-category .slider-container .slider-wrapper .slider-card img {
  width: 100%;
}
.section-media {
  display: flex;
  justify-content: center;
  background: #0E1820;
  position: relative;
  padding-left: 12rem;
  padding-right: 12rem;
}
.section-media .media-image-wrapper {
  width: 79%;
  margin-right: 4.6rem;
}
.section-media .media-image-wrapper img {
  width: 100%;
}
.section-media .media-ornament-right {
  position: absolute;
  top: 0;
  right: 0;
}
.section-media .media-text-wrap {
  display: flex;
  flex-direction: column;
  align-self: center;
  z-index: 2;
}
.section-media .media-text-wrap .media-text-title {
  font-weight: bold;
  font-size: 3.2rem;
  line-height: 4.2rem;
  color: #FFFFFF;
  max-width: 40rem;
  margin-bottom: .8rem;
}
.section-media .media-text-wrap .media-text-description {
  font-size: 1.6rem;
  line-height: 2.4rem;
  color: #C1C2C2;
  max-width: 40rem;
}
.section-media .media-text-wrap img {
  width: 50%;
}
.section-faq {
  background: #0E1820;
  padding-top: 12.2rem;
}
.section-faq .title {
  font-weight: bold;
  font-size: 3.2rem;
  line-height: 4.2rem;
  text-align: center;
  color: #FFFFFF;
  margin-bottom: 4rem;
}
.section-faq .faq-list {
  width: calc(100vw - 50%);
  max-width: 74.6rem;
  margin: auto;
}
.section-faq .faq-list .card-wrap {
  margin-bottom: .8rem;
}
.section-faq .faq-list .card-wrap:last-child {
  margin-bottom: 0;
}
.section-closing {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #0E1820;
  padding-top: 11.2rem;
  padding-bottom: 16.6rem;
}
.section-closing .text {
  font-weight: bold;
  font-size: 3.2rem;
  line-height: 4.2rem;
  text-align: center;
  color: #FFFFFF;
  max-width: 50%;
}
.section-closing .button {
  margin-top: 4.7rem;
  padding: 1.6rem 2.4rem;
  background-color: #1F93FF;
  border-radius: 2px;
  transition: background-color .3s ease-in-out;
}
.section-closing .button:hover {
  cursor: pointer;
  background-color: #41a4ff;
}
.section-closing .button p {
  font-size: 1.6rem;
  line-height: 1.8rem;
  display: flex;
  align-items: center;
  color: #FFFFFF;
}
.section-closing .ornament-left {
  position: absolute;
  bottom: 0;
  left: 0;
}

@media only screen and (max-width: 1000px) { 
  .hero-description-text p {
    max-width: 100%;
  }
}
@media only screen and (max-width: 950px) { 
  .section-closing .text {
    max-width: 80%;
  }
}
`