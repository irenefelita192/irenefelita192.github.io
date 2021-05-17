import css from "styled-jsx/css"

export default css`
  @import url("https://fonts.googleapis.com/css2?family=Lilita+One&display=swap");
  .container {
    position: relative;
    background: linear-gradient(232.85deg, #7cbadf 6.01%, #3c8ff6 65.65%);
    /* max-width: 1600px; */
    /* margin: auto; */
    overflow: hidden;
  }

  .wrap {
    /* padding-right: 1rem;
  padding-left: 1rem; */
    display: flex;
    justify-content: center;
    position: relative;
  }

  .bg_pattern {
    /* margin: 1rem;
  margin-top: 11rem; */
    /* border: 1px solid red; */
    position: absolute;
    /* margin-top: 8rem; */
    z-index: 2;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    margin-top: 6%;
    max-width: 97%;
    height: auto;
    overflow: hidden;
  }

  .bg_pattern > img {
    display: flex;
    width: 100%;
    /* height: 100%; */
    /* -webkit-animation: blink 1s infinite;
  -moz-animation: blink 1s infinite;
  -o-animation: blink 1s infinite;
  animation: blink 1s infinite; */
  }

  @-webkit-keyframes blink {
    0%,
    100% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
  }
  @-moz-keyframes blink {
    0%,
    100% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
  }
  @-o-keyframes blink {
    0%,
    100% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
  }
  @keyframes blink {
    0%,
    100% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
  }

  .bg_background {
    /* border: 1px solid yellow; */
    position: absolute;
    width: 100%;
    top: -6rem;
  }

  .bg_background > img {
    width: 100%;
    min-height: 80rem;
    max-height: 90rem;
  }

  .content_container {
    /* background: red;
  position: absolute;
  top: 6.6rem;
  margin-left: 10.3rem;
  margin-right: 8.8rem;
  z-index: 3; */
    z-index: 3;
    /* border: 1px solid green; */
    /* margin: auto; */
    margin-top: 4%;
    margin-left: 12.4rem;
    margin-right: 12.4rem;
    /* max-width: 91%; */
  }

  .section_head {
    display: flex;
    justify-content: space-between;
  }

  .head_left {
  }

  .head_left_logo {
    margin-bottom: 4.7rem;
  }

  .head_left_logo > img {
    width: 15rem;
    height: auto;
  }

  .head_left_title {
    font-family: Lilita One;
    font-style: normal;
    font-weight: normal;
    font-size: 4rem;
    line-height: 4.6rem;
    text-transform: uppercase;

    /* Text / White 100 */

    color: #ffffff;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    max-width: 55.9rem;
    margin-bottom: 1.6rem;
  }

  .head_left_description {
    font-family: Public Sans;
    font-style: normal;
    font-weight: 300;
    font-size: 2rem;
    line-height: 3rem;
    /* or 150% */
    color: rgba(255, 255, 255, 0.9);
    max-width: 52.2rem;
    margin-bottom: 4rem;
  }

  .head_left_footer {
    display: flex;
  }

  .head_left_footer > .button_left {
    width: 100%;
    /* height: 6.1rem;
  background: linear-gradient(293.38deg, #FFD17B 3.55%, #F9A119 69.22%);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center; */
    margin-right: 1.8rem;
  }

  .button_left:hover {
    cursor: pointer;
  }

  .head_left_footer > .button_left > p {
    font-family: Lilita One;
    font-style: normal;
    font-weight: normal;
    font-size: 2.8rem;
    line-height: 3.2rem;
    /* identical to box height */
    text-align: center;
    color: #ffffff;

    text-shadow: 0px 2px 3px rgba(0, 0, 0, 0.5);
  }

  .head_left_footer > .button_right {
    width: 100%;
    /* height: 6.1rem;
  background: rgb(109,160,242);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
   */
  }

  .head_left_footer > .button_right > p {
    font-family: Lilita One;
    font-style: normal;
    font-weight: normal;
    font-size: 2.8rem;
    line-height: 3.2rem;
    /* identical to box height */
    text-align: center;
    color: #ffffff;

    text-shadow: 0px 2px 3px rgba(0, 0, 0, 0.5);
  }

  .button_right:hover {
    cursor: pointer;
  }

  .head_right {
    margin-left: 1.5rem;
    height: 54.6rem;
  }

  .head_right > img {
    width: 100%;
    max-width: 57.7rem;
  }

  .htp_title_wrap {
    margin-top: 23.9rem;
  }

  .htp_title {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 4rem;
  }

  .htp_title > img {
    width: 100%;
  }

  .htp_dash_ornament {
    width: 100%;
    height: 0.3rem;
    background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzQ4IiBoZWlnaHQ9IjMiIHZpZXdCb3g9IjAgMCAzNDggMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIgMS41SDM0NiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1kYXNoYXJyYXk9IjEyIDEyIi8+Cjwvc3ZnPgo=");
  }

  .htp_title_text {
    font-family: Lilita One;
    font-style: normal;
    font-weight: normal;
    font-size: 4rem;
    line-height: 4.6rem;
    color: #ffffff;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin-right: 4rem;
    margin-left: 4rem;
    white-space: nowrap;
  }

  .htp_intro_step {
    display: flex;
    margin-top: 8rem;
    justify-content: space-evenly;
  }

  .htp_intro_step_1 {
  }

  .intro_step_1 {
    display: flex;
  }

  .intro_step_1 > .intro_step_img {
    width: 10rem;
    height: 10rem;
    background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTEzIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDExMyAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI2NS4yNTg4IiBoZWlnaHQ9IjY1LjI1ODgiIHRyYW5zZm9ybT0ibWF0cml4KDAuODY1NzgxIDAuNTAwNDIzIC0wLjg2NTc4MSAwLjUwMDQyMyA1Ni41MDEgMjApIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXIpIi8+CjxwYXRoIGQ9Ik0wLjUwMzI5NCA2Ny41TDAgNTIuNUw1Ni40MzUzIDgzLjVMMTEyLjg2NyA1MlY2Ny41TDU2LjQzNTMgMTAwTDAuNTAzMjk0IDY3LjVaIiBmaWxsPSJ1cmwoI3BhaW50MV9saW5lYXIpIi8+CjxnIGZpbHRlcj0idXJsKCNmaWx0ZXIwX2kpIj4KPHBhdGggZD0iTTU2LjQzNTUgMTAwVjgzLjVMMTEyLjg2NyA1MS41VjY3LjVMNTYuNDM1NSAxMDBaIiBmaWxsPSJ1cmwoI3BhaW50Ml9saW5lYXIpIi8+CjwvZz4KPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjFfaSkiPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTY2LjkxODkgM0M2Ni45MTg5IDEuMzQzMTUgNjUuNTc1OCAwIDYzLjkxODkgMEg0OS45NDMyQzQ4LjI4NjQgMCA0Ni45NDMyIDEuMzQzMTQgNDYuOTQzMiAzVjQwQzQ2Ljk0MzIgNDEuNjU2OSA0NS42MDAxIDQzIDQzLjk0MzIgNDNINDIuOTU3MUM0MC4xMzg3IDQzIDM4Ljg3NTcgNDYuNTM0NyA0MS4wNTYgNDguMzIwN0w1NC42MzMgNTkuNDQyN0M1NS43Mzg2IDYwLjM0ODMgNTcuMzI5NiA2MC4zNDgzIDU4LjQzNTIgNTkuNDQyN0w3Mi4wMTIxIDQ4LjMyMDdDNzQuMTkyNCA0Ni41MzQ3IDcyLjkyOTUgNDMgNzAuMTExIDQzSDY5LjkxODlDNjguMjYyMSA0MyA2Ni45MTg5IDQxLjY1NjkgNjYuOTE4OSA0MFYzWiIgZmlsbD0idXJsKCNwYWludDNfbGluZWFyKSIvPgo8L2c+CjxkZWZzPgo8ZmlsdGVyIGlkPSJmaWx0ZXIwX2kiIHg9IjU2LjQzNTUiIHk9IjUxLjUiIHdpZHRoPSI1Ny40MzE0IiBoZWlnaHQ9IjQ4LjUiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj4KPGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT0iMCIgcmVzdWx0PSJCYWNrZ3JvdW5kSW1hZ2VGaXgiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0ic2hhcGUiLz4KPGZlQ29sb3JNYXRyaXggaW49IlNvdXJjZUFscGhhIiB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMTI3IDAiIHJlc3VsdD0iaGFyZEFscGhhIi8+CjxmZU9mZnNldCBkeD0iMSIvPgo8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIwLjUiLz4KPGZlQ29tcG9zaXRlIGluMj0iaGFyZEFscGhhIiBvcGVyYXRvcj0iYXJpdGhtZXRpYyIgazI9Ii0xIiBrMz0iMSIvPgo8ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4wNSAwIi8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW4yPSJzaGFwZSIgcmVzdWx0PSJlZmZlY3QxX2lubmVyU2hhZG93Ii8+CjwvZmlsdGVyPgo8ZmlsdGVyIGlkPSJmaWx0ZXIxX2kiIHg9IjM5Ljk1MTIiIHk9IjAiIHdpZHRoPSIzMy4xNjU4IiBoZWlnaHQ9IjYwLjEyMTkiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj4KPGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT0iMCIgcmVzdWx0PSJCYWNrZ3JvdW5kSW1hZ2VGaXgiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0ic2hhcGUiLz4KPGZlQ29sb3JNYXRyaXggaW49IlNvdXJjZUFscGhhIiB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMTI3IDAiIHJlc3VsdD0iaGFyZEFscGhhIi8+CjxmZU9mZnNldCBkeD0iMyIvPgo8ZmVDb21wb3NpdGUgaW4yPSJoYXJkQWxwaGEiIG9wZXJhdG9yPSJhcml0aG1ldGljIiBrMj0iLTEiIGszPSIxIi8+CjxmZUNvbG9yTWF0cml4IHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDEgMCAwIDAgMCAwLjg5MzM2NyAwIDAgMCAwIDAuNzI1IDAgMCAwIDEgMCIvPgo8ZmVCbGVuZCBtb2RlPSJub3JtYWwiIGluMj0ic2hhcGUiIHJlc3VsdD0iZWZmZWN0MV9pbm5lclNoYWRvdyIvPgo8L2ZpbHRlcj4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyIiB4MT0iMTMuNTAxIiB5MT0iMzEuNDYxIiB4Mj0iNjYuNzAyMyIgeTI9IjE2LjA4OTMiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0ZGRDE3QiIvPgo8c3RvcCBvZmZzZXQ9IjAuODU4MDA5IiBzdG9wLWNvbG9yPSIjRjlBMTE5Ii8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQxX2xpbmVhciIgeDE9IjU2LjY4NSIgeTE9IjUyIiB4Mj0iNTYuODI1MyIgeTI9IjExMS41IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNGRkMxNjIiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjOUM2MzBDIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQyX2xpbmVhciIgeDE9Ijg0LjY1MTIiIHkxPSI1MS41IiB4Mj0iODQuOTM1NCIgeTI9IjExMS41MTIiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0ZGQzE2MiIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM5QzYzMEMiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDNfbGluZWFyIiB4MT0iNTYuOTMxOSIgeTE9Ii01LjQ5OTgzIiB4Mj0iNTYuNTMzMiIgeTI9IjYwLjEyMTkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0ZGRThDNCIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IndoaXRlIi8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+Cg==");
    background-repeat: no-repeat;
    background-size: contain;
  }

  .intro_step_2 {
    display: flex;
  }

  .intro_step_2 > .intro_step_img {
    width: 10rem;
    height: 10rem;
    background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI3IiBoZWlnaHQ9IjExNSIgdmlld0JveD0iMCAwIDEyNyAxMTUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI2MS41NTY3IiBoZWlnaHQ9IjYxLjU1NjciIHRyYW5zZm9ybT0ibWF0cml4KDAuODY1NzQyIDAuNTAwNDkgLTAuODY1NzQyIDAuNTAwNDkgNjMuMjkzIDI0LjUyODMpIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXIpIi8+CjxyZWN0IHdpZHRoPSI1LjQ1MDM0IiBoZWlnaHQ9IjQ3LjAzMzUiIHRyYW5zZm9ybT0ibWF0cml4KDAuODY1NzQyIDAuNTAwNDkgLTAuODY1NzQyIDAuNTAwNDkgNjMuOTA4MiAyOS4yNDU0KSIgZmlsbD0id2hpdGUiLz4KPHJlY3Qgd2lkdGg9IjUuNDUwMzQiIGhlaWdodD0iNDcuMDMzNSIgdHJhbnNmb3JtPSJtYXRyaXgoMC44NjU3NDIgMC41MDA0OSAtMC44NjU3NDIgMC41MDA0OSA3Mi4zODc3IDM0LjkwNTgpIiBmaWxsPSJ3aGl0ZSIvPgo8cmVjdCB3aWR0aD0iNS40NTAzNCIgaGVpZ2h0PSI0Ny4wMzM1IiB0cmFuc2Zvcm09Im1hdHJpeCgwLjg2NTc0MiAwLjUwMDQ5IC0wLjg2NTc0MiAwLjUwMDQ5IDgxLjgwNzYgNDAuNTY1OSkiIGZpbGw9IndoaXRlIi8+CjxyZWN0IHdpZHRoPSI1LjQ1MDM0IiBoZWlnaHQ9IjQ3LjAzMzUiIHRyYW5zZm9ybT0ibWF0cml4KDAuODY1NzQyIDAuNTAwNDkgLTAuODY1NzQyIDAuNTAwNDkgOTAuMjg2MSA0Ni4yMjYzKSIgZmlsbD0id2hpdGUiLz4KPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjBfZCkiPgo8cGF0aCBkPSJNMTAuNDc0NyA2OS4zMzk3TDEwIDU1LjE4ODdMNjMuMjMxMyA4NC40MzRMMTE2LjQ1OSA1NC43MTdWNjkuMzM5N0w2My4yMzEzIDEwMEwxMC40NzQ3IDY5LjMzOTdaIiBmaWxsPSJ1cmwoI3BhaW50MV9saW5lYXIpIi8+CjwvZz4KPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjFfaSkiPgo8cGF0aCBkPSJNNjMuMjMxNCAxMDBWODQuNDM0TDExNi40NTkgNTQuMjQ1NFY2OS4zMzk3TDYzLjIzMTQgMTAwWiIgZmlsbD0idXJsKCNwYWludDJfbGluZWFyKSIvPgo8L2c+CjxnIGZpbHRlcj0idXJsKCNmaWx0ZXIyX2kpIj4KPHBhdGggZD0iTTExMS4zMjggNC4xMDk0NEMxMTEuMzI4IDQuMTA5NDQgMTEzLjQ1MyAwLjEwNDc1OCAxMTkuNTc3IDMuNDA2NThDMTI1LjcgNi43MDg0MSAxMjIuNjEzIDEwLjYzMzcgMTIyLjYxMyAxMC42MzM3TDk2Ljg3MjcgNTUuMjc5NUw4Ny43ODgyIDU3LjA3NTVMODUuNTg4IDQ4Ljc1NTJMMTExLjMyOCA0LjEwOTQ0WiIgZmlsbD0idXJsKCNwYWludDNfbGluZWFyKSIvPgo8L2c+CjxkZWZzPgo8ZmlsdGVyIGlkPSJmaWx0ZXIwX2QiIHg9IjAiIHk9IjQ5LjcxNyIgd2lkdGg9IjEyNi40NTkiIGhlaWdodD0iNjUuMjgzIiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+CjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+CjxmZUNvbG9yTWF0cml4IGluPSJTb3VyY2VBbHBoYSIgdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwIi8+CjxmZU9mZnNldCBkeT0iNSIvPgo8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSI1Ii8+CjxmZUNvbG9yTWF0cml4IHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwLjIgMCIvPgo8ZmVCbGVuZCBtb2RlPSJub3JtYWwiIGluMj0iQmFja2dyb3VuZEltYWdlRml4IiByZXN1bHQ9ImVmZmVjdDFfZHJvcFNoYWRvdyIvPgo8ZmVCbGVuZCBtb2RlPSJub3JtYWwiIGluPSJTb3VyY2VHcmFwaGljIiBpbjI9ImVmZmVjdDFfZHJvcFNoYWRvdyIgcmVzdWx0PSJzaGFwZSIvPgo8L2ZpbHRlcj4KPGZpbHRlciBpZD0iZmlsdGVyMV9pIiB4PSI2My4yMzE0IiB5PSI1NC4yNDU0IiB3aWR0aD0iNTQuMjI3NiIgaGVpZ2h0PSI0NS43NTQ3IiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+CjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW49IlNvdXJjZUdyYXBoaWMiIGluMj0iQmFja2dyb3VuZEltYWdlRml4IiByZXN1bHQ9InNoYXBlIi8+CjxmZUNvbG9yTWF0cml4IGluPSJTb3VyY2VBbHBoYSIgdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwIiByZXN1bHQ9ImhhcmRBbHBoYSIvPgo8ZmVPZmZzZXQgZHg9IjEiLz4KPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMC41Ii8+CjxmZUNvbXBvc2l0ZSBpbjI9ImhhcmRBbHBoYSIgb3BlcmF0b3I9ImFyaXRobWV0aWMiIGsyPSItMSIgazM9IjEiLz4KPGZlQ29sb3JNYXRyaXggdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAuMDUgMCIvPgo8ZmVCbGVuZCBtb2RlPSJub3JtYWwiIGluMj0ic2hhcGUiIHJlc3VsdD0iZWZmZWN0MV9pbm5lclNoYWRvdyIvPgo8L2ZpbHRlcj4KPGZpbHRlciBpZD0iZmlsdGVyMl9pIiB4PSI4NS41ODc5IiB5PSIyLjEwMTU2IiB3aWR0aD0iMzcuODAzMyIgaGVpZ2h0PSI1NC45NzQiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj4KPGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT0iMCIgcmVzdWx0PSJCYWNrZ3JvdW5kSW1hZ2VGaXgiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0ic2hhcGUiLz4KPGZlQ29sb3JNYXRyaXggaW49IlNvdXJjZUFscGhhIiB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMTI3IDAiIHJlc3VsdD0iaGFyZEFscGhhIi8+CjxmZU9mZnNldCBkeD0iLTQiIGR5PSIyIi8+CjxmZUNvbXBvc2l0ZSBpbjI9ImhhcmRBbHBoYSIgb3BlcmF0b3I9ImFyaXRobWV0aWMiIGsyPSItMSIgazM9IjEiLz4KPGZlQ29sb3JNYXRyaXggdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMC44NjI3NDUgMCAwIDAgMCAwLjU2NDcwNiAwIDAgMCAwIDAuMDk0MTE3NiAwIDAgMCAxIDAiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbjI9InNoYXBlIiByZXN1bHQ9ImVmZmVjdDFfaW5uZXJTaGFkb3ciLz4KPC9maWx0ZXI+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhciIgeDE9IjEyLjczNTEiIHkxPSIyOS42NzYyIiB4Mj0iNjIuOTE4MyIgeTI9IjE1LjE3NjYiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0ZGRDE3QiIvPgo8c3RvcCBvZmZzZXQ9IjAuODU4MDA5IiBzdG9wLWNvbG9yPSIjRjlBMTE5Ii8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQxX2xpbmVhciIgeDE9IjYzLjQ2NjgiIHkxPSI1NC43MTciIHgyPSI2My41OTkyIiB5Mj0iMTEwLjg0OSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjRkZDMTYyIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzlDNjMwQyIvPgo8L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50Ml9saW5lYXIiIHgxPSI4OS44NDUzIiB5MT0iNTQuMjQ1NCIgeDI9IjkwLjExMzQiIHkyPSIxMTAuODYxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNGRkMxNjIiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjOUM2MzBDIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQzX2xpbmVhciIgeDE9IjExOS42OSIgeTE9IjIuOTY3NTYiIHgyPSI4OC4wMiIgeTI9IjU1Ljk1MjQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0ZGRTNCOSIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNGRkNEODEiLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8L3N2Zz4K");
    background-repeat: no-repeat;
    background-size: contain;
  }

  .intro_step_text {
    font-family: Lilita One;
    font-style: normal;
    font-weight: normal;
    font-size: 2.4rem;
    line-height: 3.6rem;
    text-transform: uppercase;
    color: #ffffff;
    text-shadow: 0px 2px 3px rgba(0, 0, 0, 0.5);
    max-width: 37.2rem;
    margin-left: 2.4rem;
  }

  .section_step {
    margin-top: 8rem;
  }

  .step_title {
    font-family: Lilita One;
    font-style: normal;
    font-weight: normal;
    font-size: 2.4rem;
    line-height: 3.6rem;
    /* display: flex; */
    /* align-items: center; */
    text-align: center;
    text-transform: uppercase;
    color: #ffffff;
    text-shadow: 0px 2px 3px rgba(0, 0, 0, 0.5);
    margin-bottom: 3.2rem;
  }

  .step_img_wrap {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 0 2rem;
    grid-template-areas:
      ". ."
      ". .";
  }

  /* .step_img_wrap div {
  margin: auto;
} */

  .step_img {
    width: 100%;
    height: auto;
  }

  .step_img > img {
    width: 100%;
    height: 100%;
  }

  .step_card {
    width: 55.1rem;
    height: 40.7rem;
    border: 2px solid rgba(255, 255, 255, 0.4);
    box-sizing: border-box;
    border-radius: 20px;
  }

  .section_reminder {
    position: relative;
    background: rgba(255, 255, 255, 0.15);
    border: 1px solid rgba(255, 255, 255, 0.5);
    box-sizing: border-box;
    border-radius: 2rem;
    padding-top: 2.3rem;
    width: 100%;
    margin: auto;
    margin-top: 3rem;
    display: flex;
    justify-content: center;
    padding-right: 2rem;
    padding-left: 2rem;
  }

  .reminder_text {
    font-family: Lilita One;
    font-style: normal;
    font-weight: normal;
    font-size: 2.4rem;
    line-height: 3.4rem;
    /* or 150% */

    display: flex;
    align-items: center;
    text-align: center;
    text-transform: uppercase;

    color: #ffffff;

    text-shadow: 0px 2px 3px rgba(0, 0, 0, 0.5);
    margin-bottom: 6.1rem;
  }

  .reminder_button_download {
    position: absolute;
    width: 32rem;
    /* height: 6.1rem; */
    /* gradient */
    /* background: linear-gradient(293.38deg, #FFD17B 3.55%, #F9A119 69.22%);
  border-radius: 8px; */
    bottom: -3rem;
    left: 0;
    right: 0;
    margin: auto;
    /* display: flex;
  align-items: center; */
  }

  .reminder_button_download:hover {
    cursor: pointer;
  }

  .reminder_button_download > p {
    font-family: Lilita One;
    font-style: normal;
    font-weight: normal;
    font-size: 2.8rem;
    line-height: 3.2rem;
    text-align: center;

    color: #ffffff;

    text-shadow: 0px 2px 3px rgba(0, 0, 0, 0.5);
    margin: auto;
  }

  .section_htp_video {
    position: relative;
    margin-top: 15rem;
  }

  .htp_video_title {
    font-family: Lilita One;
    font-style: normal;
    font-weight: normal;
    font-size: 4rem;
    line-height: 4.6rem;
    /* identical to box height */
    text-align: center;
    text-transform: uppercase;

    color: #ffffff;

    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin-bottom: 8rem;
  }

  .htp_video_wrap {
    display: flex;
    justify-content: center;
  }

  .htp_video_frame {
    max-width: 90rem;
    width: 100%;
    bottom: -10rem;
    position: absolute;
    z-index: -1;
    right: 0;
    left: 0;
    margin: auto;
  }

  .section_condition_rules {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    /* max-width: 90%; */
    /* align-items: center; */
    margin: auto;
    margin-top: 15rem;
  }

  .section_condition_rules > img {
    width: 100%;
  }

  .condition_rules_title {
    font-family: Lilita One;
    font-style: normal;
    font-weight: normal;
    font-size: 4rem;
    line-height: 4.6rem;
    /* identical to box height */
    text-align: center;
    text-transform: uppercase;

    color: #ffffff;

    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin-bottom: 8rem;
    position: absolute;
    top: -7.5%;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .pose_left_img {
    position: absolute;
    left: -11rem;
    top: 1rem;
    width: 18rem;
  }

  .pose_right_img {
    position: absolute;
    right: -10.5rem;
    top: -1rem;
    width: 18rem;
  }

  .condition_rules_box_container {
    width: 100rem;
    /* height: 10rem; */
    border: 3px dashed #fff;
    border-right: none;
    border-left: none;
    margin: auto;
    display: flex;
  }

  .rules_box {
    max-width: 19rem;
    margin-top: 1.3rem;
    margin-bottom: 3.5rem;
  }

  .rules_box_head {
    display: flex;
    justify-content: center;
    height: 3.5rem;
  }

  .rules_box_point {
    display: flex;
    justify-content: center;
  }

  .point_value {
    font-family: Lilita One;
    font-style: normal;
    font-weight: normal;
    font-size: 6.4rem;
    line-height: 7.3rem;
    display: flex;
    align-items: center;
    text-align: center;
    text-transform: uppercase;

    /* Text / White 100 */

    color: #ffffff;
    margin-right: 1.5rem;
  }

  .point_label {
    font-family: Lilita One;
    font-style: normal;
    font-weight: normal;
    font-size: 2.4rem;
    line-height: 2.7rem;
    display: flex;
    align-items: center;
    text-transform: uppercase;

    /* Info / Warning */

    color: #ffd752;
  }

  .rules_box_description {
    font-family: Lilita One;
    font-style: normal;
    font-weight: normal;
    font-size: 1.8rem;
    line-height: 2.1rem;
    display: flex;
    align-items: center;
    text-align: center;
    text-transform: uppercase;

    /* Text / White 100 */

    color: #ffffff;
    transform: matrix(1, 0, 0, 1, 0, 0);
  }

  .rules_box_description > p > span {
    color: #ffd752;
  }

  .section_prize {
    margin-top: 15rem;
  }

  .prize_title {
    font-family: Lilita One;
    font-style: normal;
    font-weight: normal;
    font-size: 4rem;
    line-height: 4.6rem;
    /* identical to box height */

    text-transform: uppercase;
    text-align: center;
    color: #ffffff;

    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  .prize_wrap {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    margin-top: 6.5rem;
  }

  .prize_img {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .prize_img > img {
    max-width: 35.9rem;
    width: 100%;
  }

  .button_other_terms {
    /* background: linear-gradient(293.38deg, #FFD17B 3.55%, #F9A119 69.22%);
  border-radius: 8px; */
    width: 38rem;
    /* height: 6.1rem; */
    margin: auto;
    margin-top: 6.4rem;
    /* display: flex; */
  }

  .button_other_terms:hover {
    cursor: pointer;
  }

  .button_other_terms_text {
    font-family: Lilita One;
    font-style: normal;
    font-weight: normal;
    font-size: 28px;
    line-height: 32px;
    /* identical to box height */

    display: flex;
    align-items: center;
    text-align: center;

    color: #ffffff;

    text-shadow: 0px 2px 3px rgba(0, 0, 0, 0.5);
    margin: auto;
  }

  .section_download_app {
    margin-top: 8rem;
    display: flex;
    justify-content: center;
  }

  .download_app_left_section {
    align-self: center;
  }

  .left_section_title {
    font-family: Lilita One;
    font-style: normal;
    font-weight: normal;
    font-size: 4rem;
    line-height: 4.6rem;
    text-transform: uppercase;

    /* Text / White 100 */

    color: #ffffff;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
    max-width: 50rem;
  }

  .left_section_description {
    font-family: Public Sans;
    font-style: normal;
    font-weight: 500;
    font-size: 2rem;
    line-height: 3rem;
    /* or 150% */

    /* Text / White 100 */

    color: rgba(255, 255, 255, 0.9);
    max-width: 50rem;
    margin-top: 1.7rem;
  }

  .left_section_button {
    max-width: 318px;
    /* gradient */
    /* background: linear-gradient(293.38deg, #FFD17B 3.55%, #F9A119 69.22%);
  border-radius: 8px; */
    margin-top: 3.4rem;
    width: 100%;
    /* display: flex;
  justify-content: center; */
  }

  .left_section_button {
    cursor: pointer;
  }

  .left_section_button_text {
    font-family: Lilita One;
    font-style: normal;
    font-weight: normal;
    font-size: 28px;
    line-height: 32px;
    /* identical to box height */

    display: flex;
    align-items: center;
    text-align: center;

    color: #ffffff;

    text-shadow: 0px 2px 3px rgba(0, 0, 0, 0.5);
  }

  .download_app_right_section {
    width: 60rem;
  }

  .download_app_right_section > img {
    width: 100%;
    object-fit: contain;
  }

  .footer {
    position: relative;
    height: 9.3rem;
    bottom: 0;
    width: 100%;
    z-index: 2;
    margin-top: 6rem;
  }

  .divider {
    width: 100%;
    height: 1px;
    background: rgba(255, 255, 255, 0.4);
  }

  .footer_content {
    max-width: 120rem;
    display: flex;
    justify-content: space-around;
    margin: auto;
    margin-top: 2.6rem;
  }

  .footer_content > img {
    width: 6.5rem;
    height: 100%;
  }

  .content_link_wrap {
    display: flex;
  }

  .content_link {
    font-family: Lilita One;
    font-style: normal;
    font-weight: normal;
    font-size: 1.6rem;
    line-height: 1.5rem;
    /* identical to box height, or 94% */
    align-self: center;

    color: #ffffff;
  }

  .content_link:hover {
    cursor: pointer;
    opacity: 0.9;
    transition: ease-in-out 0.3s;
  }

  .spacer_white {
    width: 0.4rem;
    height: 0.4rem;
    align-self: center;
    background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNCIgaGVpZ2h0PSI0IiB2aWV3Qm94PSIwIDAgNCA0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8Y2lyY2xlIGN4PSIyIiBjeT0iMiIgcj0iMiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg==");
    margin-left: 0.8rem;
    margin-right: 0.8rem;
  }

  .content_copyright {
    font-family: Public Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 1.2rem;
    line-height: 1.5rem;
    /* identical to box height, or 125% */

    text-align: right;

    color: #ffffff;
    align-self: center;
  }

  .bg_bottom {
    position: absolute;
    bottom: 0;
    width: 100%;
    z-index: 1;
    height: auto;
    max-height: 100rem;
    overflow: hidden;
  }

  .bg_bottom > img {
    width: 100%;
  }

  .player_container {
    max-width: 70rem;
    width: 100%;
    height: 39.4rem;
    margin: auto;
    overflow: hidden;
    border-radius: 4px;
  }

  .player_container > div {
    background: none;
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: center;
    background: white;
    box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.25);
    position: relative;
    height: 57px;
    width: 100%;
    z-index: 2;
  }

  .header img {
    width: 141px;
    height: 33px;
    margin: 12px 0;
  }

  /* .header :hover{
  background: red;
  transition: 3s;
} */
  @media screen and (min-width: 1900px) {
    .content_container {
      max-width: 120rem;
      margin: auto;
      margin-top: 4%;
    }

    .bg_pattern {
      max-width: 1900px;
    }
  }

  @media screen and (max-width: 1200px) {
    .content_container {
      max-width: 90%;
      margin: auto;
      margin-top: 4%;
    }
  }

  @media screen and (max-width: 940px) {
    .condition_rules_title {
      top: -21.5%;
    }
  }
`
