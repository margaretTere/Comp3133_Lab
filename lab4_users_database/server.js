const connectDB = require('./config/db');
const app = require('./config/app');
const CFG = require('./config/config')

app.listen(CFG.PORT, () => {
    console.log(`Server running on port ${CFG}`);
    connectDB();
});
