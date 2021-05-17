import css from 'styled-jsx/css'

export default css`
.container {
  background: #ffffff;
}

.section1 {

}

.section1 .image_hero {
  width: 100%;
}

.section1 .content_hero {
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  /* or 150% */

  text-align: center;

  color: #6C7580;
  padding: 11px 16px 0;
}

.content_hero .button_wrapper {
  width: 77%;
  margin: auto;
  margin-top: 24px;
  padding-bottom: 16px;
}

.content_hero .button_wrapper .tag_button_text {
  font-size: 14px;
  line-height: 21px;
  margin-top: 16px;
}

.section1 .ornament_hero_image {
  width: 100%;
}

.section1 .ornament_hero_image img {
  width: 100%;
}

.section2 {
  margin-top: 4rem;
}

.section2 .title {
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 33px;
  text-align: center;
  color: #142539;
  margin-bottom: 16px;
  padding: 0 16px;
}

.section2 .description {
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #6C7580;
  padding: 0 16px;
  margin-bottom: 34px;
}

.section2 .image_section {
  width: 100%;
}

.section2 .image_section img {
  width: 100%;
}

.section2 .icon_list {
  margin-top: 32px;
}

.section2 .icon_list .icon_item {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 32px;
}

.section2 .icon_list .icon_item:last-child {
  margin-bottom: 0;
}

.icon_item .ornament_left {
  width: 65px;
  position: absolute;
  top: -15px;
  left: 0;
}

.icon_item .ornament_right {
  width: 65px;
  position: absolute;
  top: 0;
  right: 0;
}

.icon_item .icon_image {
  width: 100px;
}

.icon_item .icon_image img {
  width: 100%;
}

.icon_item .icon_title {
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  color: #121212;
  margin-top: 8px;
  margin-bottom: 4px;
}

.icon_item .icon_description {
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  color: #6C7580;
}

.section2 .ornament_plane_bottom {
  width: 69.51px;
  margin-top: 16px;
  margin-right: 24.65px;
  margin-left: auto;
}

.section2 .ornament_plane_bottom img {
  width: 100%;
}

.section3 {
  position: relative;
  width: 100%;
  /* padding-bottom: 166px; */
}

.section3 .background_image {
  position: absolute;
  width: 100%;
}

.section3 .title {
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 33px;
  text-align: center;
  color: #142539;
  padding: 0 16px 32px;
}

.section3 .carousel {
  width: 100%;
}

.section3 .button_wrapper {
  position: relative;
  margin-top: 24px;
  padding: 0 16px 166px 16px;
}

.section4 {
 position: relative;
 width: 100%;
}

.section4 .title {
  position: relative;
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 33px;
  text-align: center;
  color: #142539;
  padding: 0 16px 32px;
}

.section4 .background_image {
  width: 100%;
  position: absolute;
  top: 17%;
}

.section4 .carousel {
  width: 100%;
  /* display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2.4rem; */
  margin: auto;
  margin-bottom: 24px;
}

.video_card {
  width: 100%;
}

.video_card img {
  width: 100%;
}

.section4 .button_wrapper {
  position: relative;
  padding: 0 16px 38.25px;
}

.section4 .ornament {
  position: relative;
  display: flex;
  justify-content: space-between;
}

.section4 .ornament .ornament_left {
  width: 67px;
  object-fit: contain;
}

.section4 .ornament .ornament_right {
  width: 69.51px;
  margin-right: 23.61px;
  object-fit: contain;
}

.section5 {
  position: relative;
  margin-top: 16px;
}

.section5 .background_image {
  width: 100%;
  position: absolute;
  top: 0;
  height: 100%;
}

.section5 .card_wrapper {
  position: relative;
  padding: 46px 16px;
}
`