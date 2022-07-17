const mongoose = require("mongoose");

const MomenSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    deskripsi: { type: String, required: true, },
    img: { type: String, required: true },
    categories: { type: Array },
    tanggal: { type: Date}
  },
  { timestamps: true }
);


MomenSchema.statics = {
  /**
   * Find project by _id
   *
   * @param {ObjectId} _id
   * @api private
   */

  get: function (_id) {
      return this.findOne({
              _id
          })
          .exec();
  }
}

module.exports = mongoose.model("Momen", MomenSchema);