let express = require('express')
const router = express.Router();
let Form = require('../model/form');
router.post('/form', async (req, res) => {
    try {
        var form = new Form(req.body);
        var result = await form.save();
        res.send(result);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get('/form/', async (req, res) => {
    try {
        var result = await Form.find().exec();
        res.send(result);
    } catch (error) {
        res.status(500).send(error);
    }
});
router.get('/formData/:Id', async (req, res) => {
   try {
    var form = await Form.findById(req.params.Id).exec();
    res.send(form);
} catch (error) {
    res.status(500).send(error);
}
});

router.put('/form/:id',async (req, res) => {
    try {
        var form = await Form.findById(req.params.id).exec();
        form.set(req.body);
        var result = await form.save();
        res.send(result);
    } catch (error) {
        res.status(500).send(error);
    }
});
router.delete('/form/:id',async (req, res) => {
    try {
        var result = await Form.deleteOne({ _id: req.params.id }).exec();
        res.send(result);
        console.log(result);
    } catch (error) {
        res.status(500).send(error);
    }
});
module.exports = router;
