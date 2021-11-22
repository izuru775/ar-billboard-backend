const router = express.Router();
const Controllers = require('../controllers/index');
const { mapReduce } = require('../models/locationModal');

router.post('/', (req, res) => {
    Controllers.projectControllers.createProject(req,res)
});

module.exports = router;