const Album = require('../models/album');

module.exports = {
    index,
    show,
};

async function index(req, res) {
    const albums = await Album.find({});
    res.render('albums/index', { title: 'All Albums', albums });
  }

async function show(req, res) {
    const album = await Album.findById(req.params.id);
    res.render('albums/show', { title: 'Album Detail', album });
}