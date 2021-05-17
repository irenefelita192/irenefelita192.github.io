import css from "styled-jsx/css"

export default css`
  @import url("https://fonts.googleapis.com/css2?family=Lilita+One&display=swap");
  
  .container {
    position: relative;
    background: linear-gradient(251.39deg, #7CBADF 12.02%, #3C8FF6 101.03%);
    overflow: hidden;
  }

  .bg_top {
    position: absolute;
    z-index: 1;
    width: 100%;
    top: -50px;
  }

  .bg_bottom {
    position: absolute;
    z-index: 1;
    width: 100%;
    bottom: 0;
    height: 30%;
    max-height: 1200px;
  }

  .bg_pattern {
    width: auto;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2;
    margin: auto;
  }

  .content_wrap {
    position: relative; 
    z-index: 3;
  }

  .section1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;
  }

  .section1 > img {
    width: 87px;
    height: 55px;
    margin-top: 37px;
    margin-bottom: 18px;
  }

  .section1_title {
    font-family: Lilita One;
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    line-height: 25px;
    text-align: center;
    text-transform: uppercase;

    /* Text / White 100 */

    color: #FFFFFF;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    max-width: 296px;
    margin-bottom: 16px;
  }

  .section1_description {
    font-family: Public Sans;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    /* or 143% */

    text-align: center;

    color: rgba(255, 255, 255, 0.9);
    max-width: 319px;
    margin-bottom: 19px;
  }

  .section1_button_wrap {
    display: flex;
  }

  .section1_button_primary {
    width: 144px;
    margin-right: 8px;
  }

  .section1_button_secondary {
    width: 144px;
  }

  .section1 > .image_hero {
    width: 221px;
    height: auto;
    margin-top: 24px;
    margin-bottom: 0px;
  }

  .section2 {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .section2_title {
    font-family: Lilita One;
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    line-height: 25px;
    text-align: center;
    text-transform: uppercase;

    /* Text / White 100 */

    color: #FFFFFF;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin-top: 30px;
  }

  .section2_intro_wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 48px;
  }

  .section2_intro_1 {
    display: flex;
    margin-bottom: 40px;
  }

  .section2_intro_2 {
    display: flex;
  }

  .section2_intro_1 > .section2_intro_logo {
    width: 68px;
    height: 60px;
    background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTEzIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDExMyAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI2NS4yNTg4IiBoZWlnaHQ9IjY1LjI1ODgiIHRyYW5zZm9ybT0ibWF0cml4KDAuODY1NzgxIDAuNTAwNDIzIC0wLjg2NTc4MSAwLjUwMDQyMyA1Ni41MDEgMjApIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXIpIi8+CjxwYXRoIGQ9Ik0wLjUwMzI5NCA2Ny41TDAgNTIuNUw1Ni40MzUzIDgzLjVMMTEyLjg2NyA1MlY2Ny41TDU2LjQzNTMgMTAwTDAuNTAzMjk0IDY3LjVaIiBmaWxsPSJ1cmwoI3BhaW50MV9saW5lYXIpIi8+CjxnIGZpbHRlcj0idXJsKCNmaWx0ZXIwX2kpIj4KPHBhdGggZD0iTTU2LjQzNTUgMTAwVjgzLjVMMTEyLjg2NyA1MS41VjY3LjVMNTYuNDM1NSAxMDBaIiBmaWxsPSJ1cmwoI3BhaW50Ml9saW5lYXIpIi8+CjwvZz4KPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjFfaSkiPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTY2LjkxODkgM0M2Ni45MTg5IDEuMzQzMTUgNjUuNTc1OCAwIDYzLjkxODkgMEg0OS45NDMyQzQ4LjI4NjQgMCA0Ni45NDMyIDEuMzQzMTQgNDYuOTQzMiAzVjQwQzQ2Ljk0MzIgNDEuNjU2OSA0NS42MDAxIDQzIDQzLjk0MzIgNDNINDIuOTU3MUM0MC4xMzg3IDQzIDM4Ljg3NTcgNDYuNTM0NyA0MS4wNTYgNDguMzIwN0w1NC42MzMgNTkuNDQyN0M1NS43Mzg2IDYwLjM0ODMgNTcuMzI5NiA2MC4zNDgzIDU4LjQzNTIgNTkuNDQyN0w3Mi4wMTIxIDQ4LjMyMDdDNzQuMTkyNCA0Ni41MzQ3IDcyLjkyOTUgNDMgNzAuMTExIDQzSDY5LjkxODlDNjguMjYyMSA0MyA2Ni45MTg5IDQxLjY1NjkgNjYuOTE4OSA0MFYzWiIgZmlsbD0idXJsKCNwYWludDNfbGluZWFyKSIvPgo8L2c+CjxkZWZzPgo8ZmlsdGVyIGlkPSJmaWx0ZXIwX2kiIHg9IjU2LjQzNTUiIHk9IjUxLjUiIHdpZHRoPSI1Ny40MzE0IiBoZWlnaHQ9IjQ4LjUiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj4KPGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT0iMCIgcmVzdWx0PSJCYWNrZ3JvdW5kSW1hZ2VGaXgiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0ic2hhcGUiLz4KPGZlQ29sb3JNYXRyaXggaW49IlNvdXJjZUFscGhhIiB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMTI3IDAiIHJlc3VsdD0iaGFyZEFscGhhIi8+CjxmZU9mZnNldCBkeD0iMSIvPgo8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIwLjUiLz4KPGZlQ29tcG9zaXRlIGluMj0iaGFyZEFscGhhIiBvcGVyYXRvcj0iYXJpdGhtZXRpYyIgazI9Ii0xIiBrMz0iMSIvPgo8ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4wNSAwIi8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW4yPSJzaGFwZSIgcmVzdWx0PSJlZmZlY3QxX2lubmVyU2hhZG93Ii8+CjwvZmlsdGVyPgo8ZmlsdGVyIGlkPSJmaWx0ZXIxX2kiIHg9IjM5Ljk1MTIiIHk9IjAiIHdpZHRoPSIzMy4xNjU4IiBoZWlnaHQ9IjYwLjEyMTkiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj4KPGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT0iMCIgcmVzdWx0PSJCYWNrZ3JvdW5kSW1hZ2VGaXgiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0ic2hhcGUiLz4KPGZlQ29sb3JNYXRyaXggaW49IlNvdXJjZUFscGhhIiB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMTI3IDAiIHJlc3VsdD0iaGFyZEFscGhhIi8+CjxmZU9mZnNldCBkeD0iMyIvPgo8ZmVDb21wb3NpdGUgaW4yPSJoYXJkQWxwaGEiIG9wZXJhdG9yPSJhcml0aG1ldGljIiBrMj0iLTEiIGszPSIxIi8+CjxmZUNvbG9yTWF0cml4IHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDEgMCAwIDAgMCAwLjg5MzM2NyAwIDAgMCAwIDAuNzI1IDAgMCAwIDEgMCIvPgo8ZmVCbGVuZCBtb2RlPSJub3JtYWwiIGluMj0ic2hhcGUiIHJlc3VsdD0iZWZmZWN0MV9pbm5lclNoYWRvdyIvPgo8L2ZpbHRlcj4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyIiB4MT0iMTMuNTAxIiB5MT0iMzEuNDYxIiB4Mj0iNjYuNzAyMyIgeTI9IjE2LjA4OTMiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0ZGRDE3QiIvPgo8c3RvcCBvZmZzZXQ9IjAuODU4MDA5IiBzdG9wLWNvbG9yPSIjRjlBMTE5Ii8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQxX2xpbmVhciIgeDE9IjU2LjY4NSIgeTE9IjUyIiB4Mj0iNTYuODI1MyIgeTI9IjExMS41IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNGRkMxNjIiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjOUM2MzBDIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQyX2xpbmVhciIgeDE9Ijg0LjY1MTIiIHkxPSI1MS41IiB4Mj0iODQuOTM1NCIgeTI9IjExMS41MTIiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0ZGQzE2MiIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM5QzYzMEMiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDNfbGluZWFyIiB4MT0iNTYuOTMxOSIgeTE9Ii01LjQ5OTgzIiB4Mj0iNTYuNTMzMiIgeTI9IjYwLjEyMTkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0ZGRThDNCIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IndoaXRlIi8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+Cg==");
    background-repeat: no-repeat;
    background-size: contain;
    margin-right: 24px;
  }

  .section2_intro_2 > .section2_intro_logo {
    width: 68px;
    height: 60px;
    background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI3IiBoZWlnaHQ9IjExNSIgdmlld0JveD0iMCAwIDEyNyAxMTUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI2MS41NTY3IiBoZWlnaHQ9IjYxLjU1NjciIHRyYW5zZm9ybT0ibWF0cml4KDAuODY1NzQyIDAuNTAwNDkgLTAuODY1NzQyIDAuNTAwNDkgNjMuMjkzIDI0LjUyODMpIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXIpIi8+CjxyZWN0IHdpZHRoPSI1LjQ1MDM0IiBoZWlnaHQ9IjQ3LjAzMzUiIHRyYW5zZm9ybT0ibWF0cml4KDAuODY1NzQyIDAuNTAwNDkgLTAuODY1NzQyIDAuNTAwNDkgNjMuOTA4MiAyOS4yNDU0KSIgZmlsbD0id2hpdGUiLz4KPHJlY3Qgd2lkdGg9IjUuNDUwMzQiIGhlaWdodD0iNDcuMDMzNSIgdHJhbnNmb3JtPSJtYXRyaXgoMC44NjU3NDIgMC41MDA0OSAtMC44NjU3NDIgMC41MDA0OSA3Mi4zODc3IDM0LjkwNTgpIiBmaWxsPSJ3aGl0ZSIvPgo8cmVjdCB3aWR0aD0iNS40NTAzNCIgaGVpZ2h0PSI0Ny4wMzM1IiB0cmFuc2Zvcm09Im1hdHJpeCgwLjg2NTc0MiAwLjUwMDQ5IC0wLjg2NTc0MiAwLjUwMDQ5IDgxLjgwNzYgNDAuNTY1OSkiIGZpbGw9IndoaXRlIi8+CjxyZWN0IHdpZHRoPSI1LjQ1MDM0IiBoZWlnaHQ9IjQ3LjAzMzUiIHRyYW5zZm9ybT0ibWF0cml4KDAuODY1NzQyIDAuNTAwNDkgLTAuODY1NzQyIDAuNTAwNDkgOTAuMjg2MSA0Ni4yMjYzKSIgZmlsbD0id2hpdGUiLz4KPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjBfZCkiPgo8cGF0aCBkPSJNMTAuNDc0NyA2OS4zMzk3TDEwIDU1LjE4ODdMNjMuMjMxMyA4NC40MzRMMTE2LjQ1OSA1NC43MTdWNjkuMzM5N0w2My4yMzEzIDEwMEwxMC40NzQ3IDY5LjMzOTdaIiBmaWxsPSJ1cmwoI3BhaW50MV9saW5lYXIpIi8+CjwvZz4KPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjFfaSkiPgo8cGF0aCBkPSJNNjMuMjMxNCAxMDBWODQuNDM0TDExNi40NTkgNTQuMjQ1NFY2OS4zMzk3TDYzLjIzMTQgMTAwWiIgZmlsbD0idXJsKCNwYWludDJfbGluZWFyKSIvPgo8L2c+CjxnIGZpbHRlcj0idXJsKCNmaWx0ZXIyX2kpIj4KPHBhdGggZD0iTTExMS4zMjggNC4xMDk0NEMxMTEuMzI4IDQuMTA5NDQgMTEzLjQ1MyAwLjEwNDc1OCAxMTkuNTc3IDMuNDA2NThDMTI1LjcgNi43MDg0MSAxMjIuNjEzIDEwLjYzMzcgMTIyLjYxMyAxMC42MzM3TDk2Ljg3MjcgNTUuMjc5NUw4Ny43ODgyIDU3LjA3NTVMODUuNTg4IDQ4Ljc1NTJMMTExLjMyOCA0LjEwOTQ0WiIgZmlsbD0idXJsKCNwYWludDNfbGluZWFyKSIvPgo8L2c+CjxkZWZzPgo8ZmlsdGVyIGlkPSJmaWx0ZXIwX2QiIHg9IjAiIHk9IjQ5LjcxNyIgd2lkdGg9IjEyNi40NTkiIGhlaWdodD0iNjUuMjgzIiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+CjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+CjxmZUNvbG9yTWF0cml4IGluPSJTb3VyY2VBbHBoYSIgdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwIi8+CjxmZU9mZnNldCBkeT0iNSIvPgo8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSI1Ii8+CjxmZUNvbG9yTWF0cml4IHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwLjIgMCIvPgo8ZmVCbGVuZCBtb2RlPSJub3JtYWwiIGluMj0iQmFja2dyb3VuZEltYWdlRml4IiByZXN1bHQ9ImVmZmVjdDFfZHJvcFNoYWRvdyIvPgo8ZmVCbGVuZCBtb2RlPSJub3JtYWwiIGluPSJTb3VyY2VHcmFwaGljIiBpbjI9ImVmZmVjdDFfZHJvcFNoYWRvdyIgcmVzdWx0PSJzaGFwZSIvPgo8L2ZpbHRlcj4KPGZpbHRlciBpZD0iZmlsdGVyMV9pIiB4PSI2My4yMzE0IiB5PSI1NC4yNDU0IiB3aWR0aD0iNTQuMjI3NiIgaGVpZ2h0PSI0NS43NTQ3IiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+CjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW49IlNvdXJjZUdyYXBoaWMiIGluMj0iQmFja2dyb3VuZEltYWdlRml4IiByZXN1bHQ9InNoYXBlIi8+CjxmZUNvbG9yTWF0cml4IGluPSJTb3VyY2VBbHBoYSIgdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwIiByZXN1bHQ9ImhhcmRBbHBoYSIvPgo8ZmVPZmZzZXQgZHg9IjEiLz4KPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMC41Ii8+CjxmZUNvbXBvc2l0ZSBpbjI9ImhhcmRBbHBoYSIgb3BlcmF0b3I9ImFyaXRobWV0aWMiIGsyPSItMSIgazM9IjEiLz4KPGZlQ29sb3JNYXRyaXggdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAuMDUgMCIvPgo8ZmVCbGVuZCBtb2RlPSJub3JtYWwiIGluMj0ic2hhcGUiIHJlc3VsdD0iZWZmZWN0MV9pbm5lclNoYWRvdyIvPgo8L2ZpbHRlcj4KPGZpbHRlciBpZD0iZmlsdGVyMl9pIiB4PSI4NS41ODc5IiB5PSIyLjEwMTU2IiB3aWR0aD0iMzcuODAzMyIgaGVpZ2h0PSI1NC45NzQiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj4KPGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT0iMCIgcmVzdWx0PSJCYWNrZ3JvdW5kSW1hZ2VGaXgiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0ic2hhcGUiLz4KPGZlQ29sb3JNYXRyaXggaW49IlNvdXJjZUFscGhhIiB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMTI3IDAiIHJlc3VsdD0iaGFyZEFscGhhIi8+CjxmZU9mZnNldCBkeD0iLTQiIGR5PSIyIi8+CjxmZUNvbXBvc2l0ZSBpbjI9ImhhcmRBbHBoYSIgb3BlcmF0b3I9ImFyaXRobWV0aWMiIGsyPSItMSIgazM9IjEiLz4KPGZlQ29sb3JNYXRyaXggdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMC44NjI3NDUgMCAwIDAgMCAwLjU2NDcwNiAwIDAgMCAwIDAuMDk0MTE3NiAwIDAgMCAxIDAiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbjI9InNoYXBlIiByZXN1bHQ9ImVmZmVjdDFfaW5uZXJTaGFkb3ciLz4KPC9maWx0ZXI+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhciIgeDE9IjEyLjczNTEiIHkxPSIyOS42NzYyIiB4Mj0iNjIuOTE4MyIgeTI9IjE1LjE3NjYiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0ZGRDE3QiIvPgo8c3RvcCBvZmZzZXQ9IjAuODU4MDA5IiBzdG9wLWNvbG9yPSIjRjlBMTE5Ii8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQxX2xpbmVhciIgeDE9IjYzLjQ2NjgiIHkxPSI1NC43MTciIHgyPSI2My41OTkyIiB5Mj0iMTEwLjg0OSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjRkZDMTYyIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzlDNjMwQyIvPgo8L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50Ml9saW5lYXIiIHgxPSI4OS44NDUzIiB5MT0iNTQuMjQ1NCIgeDI9IjkwLjExMzQiIHkyPSIxMTAuODYxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNGRkMxNjIiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjOUM2MzBDIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQzX2xpbmVhciIgeDE9IjExOS42OSIgeTE9IjIuOTY3NTYiIHgyPSI4OC4wMiIgeTI9IjU1Ljk1MjQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0ZGRTNCOSIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNGRkNEODEiLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8L3N2Zz4K");
    background-repeat: no-repeat;
    background-size: contain;
    margin-right: 24px;
  }

  .section2_intro_text {
    font-family: Lilita One;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
    /* or 150% */

    display: flex;
    align-items: center;
    text-transform: uppercase;

    color: #FFFFFF;

    text-shadow: 0px 2px 3px rgba(0, 0, 0, 0.5);
    max-width: 220px;
  }

  .section2_step {
    margin-top: 80px;
  }

  .section2_step_title {
    max-width: 380px;
    font-family: Lilita One;
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    line-height: 25px;
    text-align: center;
    text-transform: uppercase;

    /* Text / White 100 */

    color: #FFFFFF;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin: auto;
    margin-bottom: 34px;
  }

  .section2_step_wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .section2_step_wrap > img {
    width: 90%;
    height: auto;
  }

  .section2_reminder {
    background: rgba(255, 255, 255, 0.15);
    border: 1px solid rgba(255, 255, 255, 0.5);
    box-sizing: border-box;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    position: relative;
    width: 90%;
    margin-top: 24px;
  }

  .section2_reminder_text {
    font-family: Lilita One;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    text-transform: uppercase;

    /* Text / White 100 */

    color: #FFFFFF;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    max-width: 304px;
    margin-top: 24px;
    margin-bottom: 50px;
  }

  .section2_reminder_button {
    width: 220px;
    position: absolute;
    right: 0;
    left: 0;
    bottom: -12%;
    margin: auto;
  }

  .section3 {
    margin-top: 64px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    z-index: 3;
  }

  .section3 > img {
    max-width: 350px;
    width: 100%;
    position: absolute;
    bottom: -10%;
    left: 0;
    right: 0;
    margin: auto;
  }

  .section3_title {
    font-family: Lilita One;
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    line-height: 25px;
    text-align: center;
    text-transform: uppercase;

    /* Text / White 100 */

    color: #FFFFFF;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    max-width: 260px;
  }

  .section3_video_wrap {
    position: relative;
    margin-top: 32px;
  }

  .section4 {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    z-index: 3;
  }

  .section4_title {
    font-family: Lilita One;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 23px;
    /* identical to box height */

    text-align: center;
    text-transform: uppercase;

    color: #FFFFFF;

    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  .section4_box_wrap {
    display: flex;
    justify-content: center;
    margin-top: 22px;
  }

  .section4_box_wrap > img {
    max-width: 328px;
    width: 90%;
    height: 100%;
  }

  .section5 {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
    position: relative;
    z-index: 3;
  }

  .section5_title {
    font-family: Lilita One;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    text-transform: uppercase;

    color: #FFFFFF;

    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    max-width: 260px;
  }

  .section5_prizes {
    display: flex;
    flex-direction: column;
  }

  .section5_button {
    width: 220px;
    margin-top: 47px;
  }

  .section6 {
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    margin-top: 50px;
    position: relative;
    z-index: 3;
  }

  .section6 > img {
    width: 100%;
    margin: auto;
  }

  .section6_title {
    font-family: Lilita One;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    text-transform: uppercase;

    color: #FFFFFF;

    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin: auto;
    margin-top: 50px;
    margin-bottom: 21px;
    max-width: 309px;
  }

  .section6_description {
    font-family: Public Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    /* or 150% */

    text-align: center;

    color: rgba(255, 255, 255, 0.9);
    margin: auto;
    margin-bottom: 43px;
    max-width: 328px;
  }

  .section6_button {
    width: 220px;
    margin: auto;
  }

  .footer {
    position: relative;
    z-index: 3;
    margin-top: 46px;
    height: 120px;
  }

  .footer_divider {
    width: 100%;
    border: 1px solid rgba(255, 255, 255, 0.4);
    margin-bottom: 8px;
  }

  .footer_logo {
    width: 65px;
    height: 40px;
    margin: auto;
    margin-top: 8px;
    margin-bottom: 8px;
  }

  .footer_logo > img {
    width: 100%;
  }

  .footer_link_wrap {
    display: flex;
    justify-content: center;
  }

  .footer_link {
    font-family: Lilita One;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 15px;
    /* identical to box height, or 125% */


    color: #FFFFFF;
  }

  .footer_spacer {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #FFFFFF;
    margin-left: 4px;
    margin-right: 4px;
    align-self: center;
  }

  .footer_copyright {
    font-family: Public Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 15px;
    /* identical to box height, or 150% */

    text-align: center;

    color: #FFFFFF;
    margin: auto;
    margin-top: 8px;
    margin-bottom: 25px;
  }

  .player_container {
    max-width: 325px;
    width: 100%;
    height: 183px;
    margin: auto;
    position: relative;
    margin-top: 32px;
    overflow: hidden;
    border-radius: 4px;
  }

  .player_container > div {
    background: none;
  }

  .header {
    position: relative;
    z-index: 3;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding:1rem;
    background: white;
    box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.25);
  }

  .header img {
    width: 11rem;
  }

  @media screen and (max-width: 320px) {
    .section2_reminder_text {
      max-width: 245px;
    }
    .player_container {
      max-width: 300px;
      height: 169px;
    }
    .content_wrap {
      padding-right: 8px;
      padding-left: 8px;
    }
  }

  @media screen and (min-width: 400px) {
    .section2_intro_text {
        max-width: 270px;
    }
  }
`