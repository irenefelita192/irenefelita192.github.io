import css from 'styled-jsx/css'

export default css`
  .mkcDetails {
    background-color: #FFF;
    position: relative;
  }

  .section1 {
    position: relative;
    display: flex;
    justify-content: center;
  }

  .backgroundOne {
    position: absolute;
    width: 100vw;
    height: auto;
    height: 100%;
  }

  .backgroundOneImg {
    position: absolute;
    width: 100%;
    height: 100%;
    /* object-fit: cover;
    object-position: left top; */
  }

  .videoDetails {
    margin-top: 16rem;
    width: 74.2rem;
    z-index: 1;
  }

  .videoDetailsLarge {
    margin-top: 16rem;
    width: 100rem;
    z-index: 1;
  }

  .videoImgContainer {
    border-radius: 24px;
    margin-bottom: 3.2rem;
    width: 100%;
    position: relative;
  }

  .videoImg {
    border-radius: 24px;
    width: 100%;
  }

  .videoButtonContainer {
    position: absolute;
    display: flex;
    bottom: 3.2rem;
    left: 3.2rem;
  }

  .shading {
    position: absolute;
    width: 100%;
    height: 30%;
    background: linear-gradient(180deg, rgba(7, 27, 80, 0) 0%, #071B50 100%);
    display: flex;
    bottom: 0;
    border-bottom-left-radius: 24px;
    border-bottom-right-radius: 24px;
  }

  .trailerButton {
    height: 4.8rem;
    margin-right: 1.9rem;
  }

  .fullVideoButton {
    height: 4.8rem;
  }

  .movieTitle {
    font-family: 'Poppins', sans-serif;
    font-size: 3.2rem;
    line-height: 1.5;
    color: #142539;
    font-weight: bold;
    margin-bottom: 1.6rem;
  }

  .movieDetails {
    font-family: 'Poppins', sans-serif;
    line-height: 1.5;
    font-size: 1.8rem;
    color: #6C7580;
    margin-bottom: 7.6rem;
  }

  .section2, .section3, .section4 {
    position: relative;
  }

  .backgroundTwo, .backgroundThree, .backgroundFour {
    position: absolute;
    width: 100vw;
    /* object-fit: cover;
    object-position: left top; */
    max-height: 100%;
  }

  .section2Container, .section3Container, .section4Container {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  }

  .section4Container {
    /* padding: 0 12rem; */
  }

  .videoCardWrapper {
    width: 100%;
  }

  .videoCardImg {
    border-radius: 24px;
    width: 100%;
  }

  .carouselTitle {
    font-family: 'Poppins', sans-serif;
    font-size: 3.2rem;
    line-height: 1.5;
    font-weight: 700;
    color: #142539;
    text-align: center;
    margin-top: 7.3rem;
    margin-bottom: 4.8rem;
  }

  .carouselContainer {
    padding: 0 12rem;
    margin-bottom: 4.8rem;
    width: 100%;
    /* display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2.4rem; */
  }

  .cardContainer {
    width: 100%;
  }

  .carouselCardLandscape {
    height: 31rem;
    /* padding: 0 12rem; */
    width: 100%;
    margin-bottom: 4.8rem;
    /* display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2.3rem; */
  }

  .carouselCardLandscape>img {
    width: 100%;
  }

  .section4Carousel {
    /* height: 40rem; */
    margin: 14.7rem 0 8.2rem;
    position: relative;
    width: 100%;
    max-width: 144rem;
  }

  .packageWrapper {
    padding: 0 12rem;
  }

  .carouselMoreButton {
    padding: 1.2rem 2.4rem;
    margin-bottom: 25.2rem;
  }

  .section3Button {
    padding: 1.2rem 2.4rem;
    margin-bottom: 11.8rem;
  }

  .bluePlane {
    position: absolute;
    left: 0;
    top: -25%;
  }

  .bluePlane>img {
    width: 50.5rem;
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
    width: 80rem;
  }

  .player_wrapper {
    max-width: 80rem;
    width: 100%;
    height: 45rem;
    margin: auto;
    overflow: hidden;
    border-radius: 4px;
  }

  .close_button {
    width: 1.5rem;
    height: 1.5rem;
    background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPG1hc2sgaWQ9Im1hc2swIiBtYXNrLXR5cGU9ImFscGhhIiBtYXNrVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4PSIwIiB5PSIwIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiPgo8cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIGZpbGw9IiMyNjI5MkIiLz4KPC9tYXNrPgo8ZyBtYXNrPSJ1cmwoI21hc2swKSI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTYuNDk0MSAyLjMyNzQ1QzE2LjgxOTYgMi4wMDIwMSAxNy4zNDcyIDIuMDAyMDEgMTcuNjcyNiAyLjMyNzQ1QzE3Ljk5ODEgMi42NTI4OSAxNy45OTgxIDMuMTgwNTMgMTcuNjcyNiAzLjUwNTk2TDExLjE3ODYgMTBMMTcuNjcyNiAxNi40OTQxQzE3Ljk5ODEgMTYuODE5NiAxNy45OTgxIDE3LjM0NzIgMTcuNjcyNiAxNy42NzI2QzE3LjM0NzIgMTcuOTk4MSAxNi44MTk2IDE3Ljk5ODEgMTYuNDk0MSAxNy42NzI2TDEwIDExLjE3ODZMMy41MDU5NiAxNy42NzI2QzMuMTgwNTMgMTcuOTk4MSAyLjY1Mjg5IDE3Ljk5ODEgMi4zMjc0NSAxNy42NzI2QzIuMDAyMDEgMTcuMzQ3MiAyLjAwMjAxIDE2LjgxOTYgMi4zMjc0NSAxNi40OTQxTDguODIxNTMgMTBMMi4zMjc0NSAzLjUwNTk2QzIuMDAyMDIgMy4xODA1MyAyLjAwMjAyIDIuNjUyODkgMi4zMjc0NSAyLjMyNzQ1QzIuNjUyODkgMi4wMDIwMSAzLjE4MDUzIDIuMDAyMDEgMy41MDU5NiAyLjMyNzQ1TDEwIDguODIxNTNMMTYuNDk0MSAyLjMyNzQ1WiIgZmlsbD0id2hpdGUiLz4KPC9nPgo8L3N2Zz4K");
    margin-right: 0;
    margin-left: auto;
    margin-bottom: 1.6rem;
    background-size: contain;
    background-repeat: no-repeat;
  }

  .close_button:hover {
    cursor: pointer;
  }
`