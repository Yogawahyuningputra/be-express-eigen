
import express from 'express'
import { routes } from './src/routes/routes.js';

// import { router as memberRouter } from './src/routes/member-routes.js'
// import { router as booksRouter } from './src/routes/books-routes.js';
const app = express();
app.use(express.json())

app.use('/api/v1', routes())
// app.use('/api/v1', booksRouter)

const port = 3001;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
