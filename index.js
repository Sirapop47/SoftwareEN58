const express = require('express')
const path = require('path')
const app = express()
const port = 8000

app.use(express.static(path.join(__dirname, 'Resume')));

app.get('/*', (req, res) =>
	 res.sendFile(path.join(__dirname, 'Resume', 'Resume.html')));

app.listen(port, () => console.log('app listening on port'+port))

