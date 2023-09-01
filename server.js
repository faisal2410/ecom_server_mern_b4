const express = require('express');
const app = express();
const helmet = require('helmet');

require("dotenv").config();
const morgan = require("morgan");
const cors = require('cors');





// middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet())



// server
const port = process.env.PORT || 8000;



app.listen(port, () => {
    console.log(`Server Running on port ${port}`);
});

