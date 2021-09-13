import css from 'styled-jsx/css'

export default css`
    .toolbar {
        position: fixed;
        z-index: 2;
        background-color: rgb(50, 54, 57);
        box-shadow: 0 -2px 8px rgb(0 0 0 / 9%), 0 4px 8px rgb(0 0 0 / 6%),
            0 1px 2px rgb(0 0 0 / 30%), 0 2px 6px rgb(0 0 0 / 15%);
        width: 100%;
        height: 56px;
        display: flex;
        align-items: center;
    }

    .download-link {
        display: flex;
        margin-left: auto;
        margin-right: 40px;
        width: 40px;
        height: 40px;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }

    .download-link:hover {
        background: rgba(255, 255, 255, 0.08);
        border-radius: 50%;
    }

    .download-link i {
        background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaGVpZ2h0PSIxMDAwIiB3aWR0aD0iMTAwMCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgo8bWV0YWRhdGE+SWNvRm9udCBJY29uczwvbWV0YWRhdGE+Cjx0aXRsZT5kb3dubG9hZDwvdGl0bGU+CjxnbHlwaCBnbHlwaC1uYW1lPSJkb3dubG9hZCIgdW5pY29kZT0iJiN4ZWYwODsiIGhvcml6LWFkdi14PSIxMDAwIiAvPgo8cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJNNDgyLjYgNzE5LjRjOS41OTk5OTk5OTk5OTk5NjYgOS4zOTk5OTk5OTk5OTk5NzcgMjUuMTk5OTk5OTk5OTk5OTkgOS4zOTk5OTk5OTk5OTk5NzcgMzQuODk5OTk5OTk5OTk5OTggMGwyOTQuMjAwMDAwMDAwMDAwMDUtMjg1Ljc5OTk5OTk5OTk5OTk1YzkuNTk5OTk5OTk5OTk5OTA5LTkuNDAwMDAwMDAwMDAwMDM0IDkuNTk5OTk5OTk5OTk5OTA5LTI0LjUgMC0zMy45MDAwMDAwMDAwMDAwMzRsLTU4LjUtNTYuODAwMDAwMDAwMDAwMDFjLTkuNjAwMDAwMDAwMDAwMDIzLTkuMzk5OTk5OTk5OTk5OTc3LTI1LjIwMDAwMDAwMDAwMDA0NS05LjM5OTk5OTk5OTk5OTk3Ny0zNC45MDAwMDAwMDAwMDAwOSAwbC0xMzkuMTk5OTk5OTk5OTk5OTMgMTM1LjIwMDAwMDAwMDAwMDA1di0zNjQuMWMwLTEzLjIwMDAwMDAwMDAwMDAwMy0xMS0yNC0yNC43MDAwMDAwMDAwMDAwNDUtMjRoLTk4LjU5OTk5OTk5OTk5OTk3Yy0xMy42MDAwMDAwMDAwMDAwMjMgMC0yNC42OTk5OTk5OTk5OTk5OSAxMC43MDAwMDAwMDAwMDAwMDMtMjQuNjk5OTk5OTk5OTk5OTkgMjR2Mzc0LjFsLTE0OS40MDAwMDAwMDAwMDAwMy0xNDUuMjAwMDAwMDAwMDAwMDVjLTkuNTk5OTk5OTk5OTk5OTY2LTkuMzk5OTk5OTk5OTk5OTc3LTI1LjE5OTk5OTk5OTk5OTk5LTkuMzk5OTk5OTk5OTk5OTc3LTM0Ljg5OTk5OTk5OTk5OTk4IDBsLTU4LjUgNTYuODAwMDAwMDAwMDAwMDFjLTkuNjAwMDAwMDAwMDAwMDIzIDkuNDAwMDAwMDAwMDAwMDM0LTkuNjAwMDAwMDAwMDAwMDIzIDI0LjUgMCAzMy45MDAwMDAwMDAwMDAwMzRsMjk0LjMgMjg1Ljc5OTk5OTk5OTk5OTk1eiBtMzMzLjQtMTM3Ljc5OTk5OTk5OTk5OTk1djIwNi41aC02MzIuMXYtMjA2LjVoLTEyMS4zOTk5OTk5OTk5OTk5OHYyNjcuMjk5OTk5OTk5OTk5OTVjMCAzMy42MDAwMDAwMDAwMDAwMiAyNy4wOTk5OTk5OTk5OTk5OTQgNjAuNzAwMDAwMDAwMDAwMDQ1IDYwLjggNjAuNzAwMDAwMDAwMDAwMDQ1aDc1My4zMDAwMDAwMDAwMDAxYzMzLjYwMDAwMDAwMDAwMDAyIDAgNjAuNzk5OTk5OTk5OTk5OTU1LTI3LjEwMDAwMDAwMDAwMDAyMyA2MC43OTk5OTk5OTk5OTk5NTUtNjAuNzAwMDAwMDAwMDAwMDQ1di0yNjcuMjk5OTk5OTk5OTk5OTVoLTEyMS4zOTk5OTk5OTk5OTk5OHoiLz4KPC9zdmc+');
        display: block;
        width: 20px;
        height: 20px;
        background-size: contain;
        background-repeat: no-repeat;
    }

    // Progress Bar
    // -------------------------

    .wrapper {
        width: calc(100% - 80px);
        position: absolute;
        top: 50%;
        left: 0;
        margin: 0 40px;
        z-index: 5;
    }

    .progress-bar {
        width: 100%;
        background-color: #ffffff;
        padding: 0;
        border-radius: 16px;
        box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.2);
        position: relative;
    }

    .progress-bar-text {
        font-family: Arial;
        font-size: 12px;
        position: absolute;
        left: 50%;
        height: 20px;
        display: flex;
        align-items: center;
        transform: translate(-50%, 0);
        color: #000000;
    }

    .progress-bar-fill {
        display: block;
        height: 20px;
        background-color: #00a59b;
        border-radius: 16px;
        transition: width 500ms ease-in-out;
    }

    @media screen and (max-width: 640px) {
        .download-link {
            width: 40px;
            height: 40px;
            margin-right: 20px;
        }

        .download-link i {
            width: 22px;
            height: 22px;
        }
    }
`
