const yaml = require('yamljs');
const path = require('path');
const conf = yaml.load('conf.yaml');

const INPUT_FILE_PREFIX = process.env.WKFN || conf.prefix || 'test';
const INPUT_DIR = process.env.WKPH || conf.temp_dir || './';
const INPUT_FILE_PATH = path.join(INPUT_DIR, `${INPUT_FILE_PREFIX}-01.kismet.netxml`);

module.exports = {
    INTERFACE: process.env.INTERFACE || conf.interface || 'wlan0mon',
    PORT: process.env.WKPORT || conf.port || 3000,
    input_file: {
        PREFIX: INPUT_FILE_PREFIX,
        DIR: INPUT_DIR,
        PATH: INPUT_FILE_PATH
    },
    REALTIME: conf.realtime,
}
