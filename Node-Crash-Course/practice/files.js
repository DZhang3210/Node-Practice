const fs = require('fs')

// fs.readFile('./docs/blog.txt', (err, data) => {
//     if(err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// })
// console.log('last line')

// fs.writeFile('./docs/blog.txt', 'hello world', ()=>{
//     console.log('file was written');
// })

if (!fs.existsSync('./assets')){
    fs.mkdir('./assets', (err) => {
        if(err) {
            console.log(err);
        }
        console.log('folder created')
    })
}else{
    fs.rmdir('./assets', (err) => {
        if(err) {
            console.log(err)
        }
        console.log('folder deeleted');
    })
}

if(fs.existsSync('./docs/deleteme.txt')){
    fs.unlink('./docs/deleteme.txt', (err) =>{
        if(err){
            console.log(err)
        }
        console.log('file deleted')
    })
}