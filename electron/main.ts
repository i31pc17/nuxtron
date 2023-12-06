import { app, BrowserWindow, protocol, net } from 'electron';
import path from 'node:path';

// process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';

const preload = path.join(__dirname, 'preload.js')

const scheme = "https";
const host = "kr.co.nuxtron";
protocol.registerSchemesAsPrivileged([
    {
        scheme,
        privileges: {
            standard: true,
            secure: true,
        }
    }
])

const createProtocol = () => {
    protocol.handle(scheme, (request) => {
        const url = new URL(request.url);

        // 외부 통신용 HTTP 프로토콜은 제외
        if (url.host !== host) {
            return net.fetch(request, {
                bypassCustomProtocolHandlers: true
            })
        }

        // nuxt public 폴더
        const publicPath = path.join(app.getAppPath(), '.output', 'public');

        const pathName = decodeURI(url.pathname); // Needed in case URL contains spaces
        const ext = path.extname(pathName);

        let openFileName = path.join(publicPath, pathName);
        if (ext === "" || ext === ".") {
            openFileName = path.join(publicPath, 'index.html');
        }

        return net.fetch(`file://${openFileName}`);
    });
}

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload,

            nodeIntegration: false,
            contextIsolation: true,
        },
    })

    if (process.env.VITE_DEV_SERVER_URL) {
        win.loadURL(process.env.VITE_DEV_SERVER_URL)
        win.webContents.openDevTools()
    } else {
        createProtocol()
        win.loadURL(`${scheme}://${host}/`)
    }
}

app.whenReady().then(() => {
    createWindow()

    // 열려 있는 창이 없으면 창 열기
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
})

app.on('window-all-closed', () => {
    // 모든 창이 닫힐 때 앱 종료
    if (process.platform !== 'darwin') {
        app.quit()
    }
})
