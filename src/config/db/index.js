const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb+srv://nguyenquocdat312000:0977013927@cluster0.xzgz9n0.mongodb.net/shop_education_dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            
        });
        console.log('Connect successfully!!!');
    } catch (error) {
        console.log('Connect failure!!!');
    }
}

module.exports = { connect };