import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.get('/',(req , res)=> {
    res.status(200).json({
        message: 'Hello world',
        name: 'Phuc Luu',
        age: 20
    })
})
app.listen(PORT , () => {
    console.log(`sever is running on http://localhost:${PORT}`)
})
// khác nhau giữa import và require
// so sánh giữa web server (Nginx, Apache) và sever back-end
// tìm hiểu code trong project