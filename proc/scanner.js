const fs = require('fs');
const path = require('path')
const proc = require('child_process');
const conf = require('../common/config');
const dirfile = require('dirfile');

let handler = null;
module.exports = {
    start: function(){
        if(!handler){
            dirfile(conf.input_file.DIR, false, false, function(filePath, stat){
                return path.extname(filePath) == '.netxml';
            }, function(filePath, stat){
                fs.unlinkSync(filePath);
                return;
            })
            
            handler = proc.spawn('sudo', 
                [
                    'airodump-ng', 
                    '-w', path.join(conf.input_file.DIR, conf.input_file.PREFIX), 
                    '--output-format', 'netxml', 
                    conf.INTERFACE
                ]
            )

            handler.on('error', (err)=>{
                console.log(err);
            })

//             handler.stdout.on('data', (data)=>{
//                 console.log(data.toString());
//             })
        }
        return handler;
    }
}
