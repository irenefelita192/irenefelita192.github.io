import theme from 'components/global-styles/theme'
import css from 'styled-jsx/css'

export default css.global`
    .search-select-container {
        width: 68%;
        border: 0;
    }

    .options-container input[type='checkbox'] {
        display: none;
    }

    .options-container {
        margin-left: 30px;
    }

    .options-container input[type='checkbox']:checked + label {
        color: ${theme.colors['vida-dark-green']};
    }

    .options-container input[type='checkbox']:checked + label:before {
        content: '';
        background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMC41IiB5PSIwLjUiIHdpZHRoPSIxOSIgaGVpZ2h0PSIxOSIgcng9IjEuNSIgZmlsbD0iIzEwOEU4NyIgc3Ryb2tlPSIjMTA4RTg3Ii8+CjxwYXRoIGQ9Ik0xNiA2LjI4NTY4TDE0LjcgNUw4LjIgMTEuNDI4NUw1LjMgOC41NzEzN0w0IDkuODU3MDVMOC4yIDE0TDE2IDYuMjg1NjhaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K');
        position: absolute;
        display: block;
        width: 20px;
        height: 20px;
        left: 10px;
        background-repeat: no-repeat;
        background-size: contain;
    }

    .options-container input[type='checkbox'] + label:before {
        content: '';
        background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMC41IiB5PSIwLjUiIHdpZHRoPSIxOSIgaGVpZ2h0PSIxOSIgcng9IjEuNSIgZmlsbD0id2hpdGUiIHN0cm9rZT0iYmxhY2siLz4KPC9zdmc+Cg==');
        position: absolute;
        display: block;
        width: 20px;
        height: 20px;
        left: 10px;
        background-repeat: no-repeat;
        background-size: contain;
    }

    .search-select-container.is-mobile {
        width: 62%;
    }
`
