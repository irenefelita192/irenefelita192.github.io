import css from 'styled-jsx/css'

export default css`
  .mkcDetailsMobile {
    background-color: #FFF;
  }

  .section1 {
    position: relative;
  }

  .sectionBg {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .videoDetails {
    position: relative;
    padding: 48px 14px 0;
  }

  .videoImg {
    width: 100%;
  }

  .buttonContainer {
    display: flex;
    justify-content: space-evenly;
    margin-top: 16px;
    padding-bottom: 33px;
  }

  .videoButton {
    height: 45px;
  }

  .section2 {
    padding: 0 16px;
  }

  .videoTitle {
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    font-size: 22px;
    color: #142539;
  }

  .videoDesc {
    margin-top: 16px;
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    line-height: 1.5;
    color: #6C7580;
  }

  .plane {
    width: 70px;
    float: right;
    margin-bottom: 35px;
  }

  .bluePlane {
    height: 83px;
    float: right;
    margin-bottom: 35px;
    margin-right: 23.61px;
  }

  .bluePlane>img {
    height: 100%;
  }

  .blueBall {
    height: 165.55px;
    position: absolute;
    top: -35px;
  }

  .blueBall>img {
    height: 100%;
  }

  .section3 {
    clear: both;
    position: relative;
  }

  .section3Title {
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    font-size: 22px;
    color: #142539;
    text-align: center;
    line-height: 1.5;
    padding: 0 16px;
  }

  .productCarousel {
    margin-top: 32px;
    width: 100%;
  }

  .cardContainer, .videoCardWrapper {
    width: 100%;
  }

  .buttonWrapper {
    margin-top: 24px;
    padding: 0 16px 53px;
    position: relative;
  }

  .ornamentContainer1 {
    position: relative;
    background-color: #FFF;
  }

  .ornamentContainer2 {
    position: relative;
    background-color: #FFF;
  }

  .boat {
    float: right;
    width: 117.36px;
    padding-bottom: 50px;
  }

  .boat>img {
    width: 100%;
  }

  .cut {
    clear: both;
    height: 82px;
    width: 100%;
    padding-bottom: 24px;
  }

  .cut>img {
    width: 100%;
    height: 100%;
  }

  .section4 {
    position: relative;
  }

  .section4Title {
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    font-size: 22px;
    color: #142539;
    text-align: center;
    line-height: 1.5;
    padding: 0 16px;
    margin-bottom: 32px;
  }

  .moreCarousel {
    margin-top: 32px;
    width: 100%;
  }

  .moreButtonWrapper {
    margin-top: 24px;
    padding: 0 16px 49px;
  }

  .section5 {
    position: relative;
    clear: both
  }

  .videoContainer {
    position: relative;
  }

  .videoCardWrapper>img {
    width: 100%;
  }

  .section5Bg {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .packageContent {
    position: relative;
    padding: 46px 16px;
  }

  .popup_trailer {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.8);
    z-index: 9991;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .popup_content {
    width: 95vw;
  }

  .player_wrapper {
    max-width: 95vw;
    width: 100%;
    height: calc(9 / 16 * 95vw);
    margin: auto;
    overflow: hidden;
    border-radius: 4px;
  }

  .close_button {
    width: 18px;
    height: 18px;
    background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPG1hc2sgaWQ9Im1hc2swIiBtYXNrLXR5cGU9ImFscGhhIiBtYXNrVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4PSIwIiB5PSIwIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiPgo8cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIGZpbGw9IiMyNjI5MkIiLz4KPC9tYXNrPgo8ZyBtYXNrPSJ1cmwoI21hc2swKSI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTYuNDk0MSAyLjMyNzQ1QzE2LjgxOTYgMi4wMDIwMSAxNy4zNDcyIDIuMDAyMDEgMTcuNjcyNiAyLjMyNzQ1QzE3Ljk5ODEgMi42NTI4OSAxNy45OTgxIDMuMTgwNTMgMTcuNjcyNiAzLjUwNTk2TDExLjE3ODYgMTBMMTcuNjcyNiAxNi40OTQxQzE3Ljk5ODEgMTYuODE5NiAxNy45OTgxIDE3LjM0NzIgMTcuNjcyNiAxNy42NzI2QzE3LjM0NzIgMTcuOTk4MSAxNi44MTk2IDE3Ljk5ODEgMTYuNDk0MSAxNy42NzI2TDEwIDExLjE3ODZMMy41MDU5NiAxNy42NzI2QzMuMTgwNTMgMTcuOTk4MSAyLjY1Mjg5IDE3Ljk5ODEgMi4zMjc0NSAxNy42NzI2QzIuMDAyMDEgMTcuMzQ3MiAyLjAwMjAxIDE2LjgxOTYgMi4zMjc0NSAxNi40OTQxTDguODIxNTMgMTBMMi4zMjc0NSAzLjUwNTk2QzIuMDAyMDIgMy4xODA1MyAyLjAwMjAyIDIuNjUyODkgMi4zMjc0NSAyLjMyNzQ1QzIuNjUyODkgMi4wMDIwMSAzLjE4MDUzIDIuMDAyMDEgMy41MDU5NiAyLjMyNzQ1TDEwIDguODIxNTNMMTYuNDk0MSAyLjMyNzQ1WiIgZmlsbD0id2hpdGUiLz4KPC9nPgo8L3N2Zz4K");
    margin-right: 0;
    margin-left: auto;
    margin-bottom: 8px;
    background-size: contain;
    background-repeat: no-repeat;
  }

  .close_button:hover {
    cursor: pointer;
  }

  @media only screen and (max-width: 375px) {
    .buttonContainer {
      justify-content: space-between;
    }
  }
`