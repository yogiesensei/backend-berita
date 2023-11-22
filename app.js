// const http = require('http')

// http.createServer((req, res) => {
//     res.write('Test')
//     console.log('server is running on port 3001')
//     res.end()
// }).listen(3001)

const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()

app.use(cors())

app.get('/', (req, res) => {
    res.json({
        code: 200,
        message: 'ok',
        data: [{
                id: 1,
                title: 'Presiden Konoha memberikan bantuan ke Sunagakure',
                headline: 'AJAIB! Presiden Konoha membantu tetangganya padahal rakyatnya lagi sulit',
                images: 'https://cdn1-production-images-kly.akamaized.net/GThpK29xMOyzhJMHajflep4CF9E=/1200x1200/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/1439641/original/042027300_1482131661-reddit.jpg'
            },
            {
                id: 2,
                title: 'Kericuhan di konser Hotplay',
                headline: 'SUNGGUH MENCENGANGKAN! Gerbang masuk konser Hotplay rusak!',
                images: 'https://awsimages.detik.net.id/visual/2023/05/15/coldplay-2_169.jpeg'
            },

        ]
    })
})

app.listen(process.env.port, () => {
    console.log('server is running on port 3001')
})