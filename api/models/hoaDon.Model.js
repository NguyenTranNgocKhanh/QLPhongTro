const mongoose = require('mongoose');

const hoaDonSchema = mongoose.Schema({
   // _id: mongoose.Schema.Types.ObjectId,
    tenHoaDon: { Type: String, require: true },
    soTien: { Type: Number, require: true },
    noiDung: String,
    tinhTrang: { Type: Boolean, default: false },
})

module.exports = mongoose.model('HoaDon', hoaDonSchema);