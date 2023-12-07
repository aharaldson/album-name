const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;

const albumSchema = new Schema ({
    artist: String,
    title: String,
    releaseYear: Number,
    tracks: [String],
}, {
    timestamps: true
});

module.exports = mongoose.model('Album', albumSchema);


