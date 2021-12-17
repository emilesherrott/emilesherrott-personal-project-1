import express from 'express'
import nodemailer from 'nodemailer'
import cors from 'cors'
import creds from './config.js'


const router = express.Router()

const transport = {
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
        user: creds.USER,
        pass: creds.PASS
    }
}

const transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Server is ready to take messages')
    }
})

router.post('/send', (req, res, next) => {
    const name = req.body.name
    const email = req.body.email
    const message = req.body.message
    const content = ` name: ${name} \n email: ${email} \nmessage: ${message}`

    const mail = {
        from: name,
        to: 'emilesherrott@gmail.com',
        subject: `New Message From ${name}`,
        text: content 
    }

    transporter.sendMail(mail, (err, data) => {
        if (err) {
            res.json({
                status: 'fail'
            })
        } else {
            res.json({
                status: 'success'
            })
        }
    })
})


const app = express()
app.use(cors())
app.use(express.json())
app.use('/', router)
app.listen(3002)