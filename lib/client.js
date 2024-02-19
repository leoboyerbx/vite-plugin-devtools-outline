const styleToApply = /* css */`.debug-outline *:not(.outline-exclude):not(.outline-exclude *):not(.outline-exclude) { outline: 1px solid red; }`

const setupDevtools = () => {
    const stylesheet = document.createElement('style')
    stylesheet.innerText = styleToApply
    document.head.appendChild(stylesheet)

    if (sessionStorage.getItem('debugOutlineActive') === 'true') {
        document.body.classList.add('debug-outline')
    }
    document.addEventListener('keydown', (e) => {
        if (e.key.toLowerCase() === 'o' && (e.ctrlKey || e.shiftKey)) {
            document.body.classList.toggle('debug-outline')
            sessionStorage.setItem('debugOutlineActive', document.body.classList.contains('debug-outline').toString())
        }
    })

    const hotKey = navigator.userAgent.indexOf('Mac OS X') != -1 ? '^' : '⇧'
    console.log(
        `%c🛠️ Devtool outlines enabled. Use ${hotKey}+O to toggle outlines.%c`,
        'background: #3A7EDD; color:white; padding: 6px 8px; border-radius: 4px;',
        '',
    )
}

setupDevtools()