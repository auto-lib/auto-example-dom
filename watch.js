// this is for when you want to have vite reload when you change
// a plugin you're working on locally.
// i.e. in vite.config.js:
//   import plugin from 'my-plugin';
//   export default {
//.    plugins: [plugin()]
//   }
// where your plugin is linked using npm link (or pnpm link)
// and you want your example / test project to reload as soon as you change
// the source of your plugin (in a separate folder / repo).

// vite won't watch files in node_modules (even though the docs claim
// it can https://vitejs.dev/config/#server-watch)
// but even if you do catch the change doing an ordinary server
// restart (e.g. by touching the config file, which is what https://github.com/antfu/vite-plugin-restart
// does) doesn't work because vite doesn't reload the plugin source.

// the following works, though. just put `node watch.js` into your npm dev
// script and you're good to go

const chokidar = require('chokidar');
const {spawn} = require('child_process');

let proc = null;

function server() {

	if (proc) proc.kill();
	proc = spawn('vite', {stdio: [0,0,0]});
}

chokidar.watch('node_modules/my-plugin/index.js').on('change', (event, path) => {

    server();
});

server();