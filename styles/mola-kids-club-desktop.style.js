import css from 'styled-jsx/css'

export default css`
.container {
  background: #FFFFFF;
}

.section1 {
  position: relative;
  padding-bottom: 8.5rem;
}

.section1 .background_image {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}

.section1 .background_image img {
  width: 100%;
}

.hero_content {
  display: grid;
  grid-template-columns: 55vw 45vw;
}

.hero_content_left {
  position: relative;
  padding-left: 6.5rem;
}

.hero_content_left img {
  width: 100%;
}

.hero_content_right {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hero_content_right .ornament_image_top {
  width: 25.2rem;
  margin-bottom: 2.4rem;
}

.ornament_image_top img {
  width: 100%;
}

.hero_content_right .text_image_hero {
  /* width: 41.9rem; */
  width: 68.2%;
}

.text_image_hero img {
  width: 100%;
}

.hero_content_right .text_content_hero {
  width: 48rem;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 1.8rem;
  line-height: 2.7rem;
  text-align: center;
  color: #FFFFFF;
}

.text_content_hero>p {
  margin-bottom: 3.4rem;
}

.text_content_hero .button_wrapper {
  width: 25rem;
  margin: auto;
}

.text_content_hero .tag_button_text {
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 1.4rem;
  line-height: 2.1rem;
  color: #FFFFFF;
  margin-top: 1.6rem;
}

.section2 {}

.section2 .content_container {
  position: relative;
  width: 100%;
}

.section2 .content_image {
  width: 100%;
}

.section2 .content_image img {
  width: 100%;
}

.section2 .content_container img {
  width: 100%;
}

.section2 .content_container .content_info {
  position: absolute;
  top: 0;
  left: 50%;
}

.content_info .content_info_wrapper {
  width: 60%;
  margin: auto;
}

.content_info .content_info_wrapper .title {
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 3.2rem;
  line-height: 4.8rem;
  display: flex;
  align-items: center;
  color: #142539;
}

.content_info .content_info_wrapper .description {
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 1.8rem;
  line-height: 2.7rem;
  color: #6C7580;
  margin-top: .8rem;
  margin-bottom: 2.4rem;
}

.content_info .info_list {}

.content_info .info_list .info_item {
  display: flex;
  align-items: center;
  margin-bottom: 2.4rem;
}

.info_list .info_item .info_icon {
  width: 8rem;
}

.info_icon img {
  width: 100%;
}

.info_list .info_item .info_text {
  margin-left: 1.6rem;
}

.info_list .info_item .info_text .title {
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 2.7rem;
  color: #121212;
}

.info_list .info_item .info_text .description {
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 2.7rem;
  color: #6C7580;
}

.section2 .ornament_bottom {
  position: relative;
  display: flex;
  justify-content: flex-end;
  padding-right: 7.2rem;
}

.section2 .ornament_bottom .image_wrapper {
  width: 10.7rem;
}

.image_wrapper img {
  width: 100%;
}

.section3 {
  position: relative;
  padding-top: 7.3rem;
}

.section3 .background_image {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
}

.section3 .background_image img {
  width: 100%;
  height: 100%;
}

.section3 .title {
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 3.2rem;
  line-height: 4.8rem;
  text-align: center;
  color: #142539;
  margin-bottom: 4.8rem;
}

.carousel {
  width: 100%;
  /* display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2.4rem;*/
  margin: auto;
  margin-bottom: 4.8rem;
}

.card_2_wrapper {
  position: relative;
  width: 100%;
}

.section3 .button_wrapper {
  position: relative;
  display: flex;
  justify-content: center;
  padding-bottom: 25.2rem;
}

.section4 {
  position: relative;
  padding-top: 7.2rem;
  padding-bottom: 13rem;
}

.section4 .background_image {
  position: absolute;
  width: 100%;
  top: 0;
  height: 100%;
}

.section4 .background_image img {
  width: 100%;
  height: 100%;
}

.section4_container {
  position: relative;
}

.section4_container .title {
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 3.2rem;
  line-height: 4.8rem;
  text-align: center;
  color: #142539;
  margin-bottom: 4.8rem;
}

.section4_container .carousel {
  width: 100%;
  /* display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2.4rem; */
  margin: auto;
  margin-bottom: 4.8rem;
}

.video_card {
  width: 100%;
}

.video_card img {
  width: 100%;
}

.section4_container .footer_section {
  position: relative;
}

.section4_container .footer_section .button_wrapper {
  display: flex;
  justify-content: center;
}

.section4_container .footer_section .ornament_image {
  position: absolute;
  top: 0;
  left: 0;
  width: 37%;
}

.ornament_image img {
  width: 100%;
}

.section5 {
  position: relative;
}

.section5 .background_image {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
}

.section5 .background_image img {
  width: 100%;
  height: 100%;
}

.section5 .card_wrapper {
  width: 78.2%;
  position: relative;
  margin: auto;
  padding-top: 14.2rem;
  padding-bottom: 8.2rem;
}

.playerWrapper {
  max-width: 70rem;
  width: 100%;
  height: 39.4rem;
  margin: auto;
  overflow: hidden;
  border-radius: 4px;
}

@media only screen and (max-width: 1100px) {
  .hero_content_right .ornament_image_top {
    width: 20rem;
    margin-bottom: 2.4rem;
  }
  .hero_content_right .text_image_hero {
    width: 32rem;
    margin-bottom: 1rem;
  }
  .hero_content_right .text_content_hero {
    width: 48rem;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 1.6rem;
    line-height: 2.4rem;
    text-align: center;
    color: #FFFFFF;
  }
  .text_content_hero>p {
    margin-top: .3rem;
    margin-bottom: 1.8rem;
    padding: 0 1.6rem;
  }
  .section2 .content_image {
    width: 60%;
    margin: auto;
    margin-bottom: 4rem;
  }
  .section2 .content_container .content_info {
    position: static;
  }
}

@media only screen and (min-width: 1680px) {
  .section5 .card_wrapper {
    width: 100%;
    max-width: 144rem;
  }
  .card_wrapper_large {
    padding: 0 12rem;
  }
  .hero_content_right .text_content_hero {
    width: 66.2%;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 2.4rem;
    line-height: 3.6rem;
    text-align: center;
    color: #FFFFFF;
    margin-top: 4rem;
  }
  .text_content_hero .button_wrapper {
    width: 50%;
    margin: auto;
  }
  .text_content_hero .tag_button_text {
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 1.8rem;
    line-height: 2.7rem;
    color: #FFFFFF;
    margin-top: 1.6rem;
  }
  .section2 .content_container .content_info {
    position: absolute;
    top: 3.2rem;
    left: 50%;
  }
}

@media only screen and (min-width: 1920px) {
  .content_info .content_info_wrapper .title {
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 4rem;
    line-height: 5.2rem;
    display: flex;
    align-items: center;
    color: #142539;
  }
  .content_info .content_info_wrapper .description {
    font-size: 2.4rem;
    line-height: 3.6rem;
    margin-top: 2.4rem;
    margin-bottom: 2.4rem;
  }
  .info_list .info_item .info_icon {
    width: 10rem;
  }
  .info_icon img {
    width: 100%;
  }
  .info_list .info_item .info_text {
    margin-left: 1.6rem;
  }
  .info_list .info_item .info_text .title {
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 2.6rem;
    line-height: 2.7rem;
    color: #121212;
  }
  .info_list .info_item .info_text .description {
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 2.7rem;
    color: #6C7580;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
}
`