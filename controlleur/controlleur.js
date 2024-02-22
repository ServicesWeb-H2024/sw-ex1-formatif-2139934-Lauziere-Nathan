const titles = require('../model/modelRoute');

const TitreControlleur = {
    getAllTitles: async (req, res) => {
        try {
            const title = await titles.getAll();
            res.json(title);
        } catch (error) {
            console.error('Error fetching all titles:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    },
    getALLParType: async (req, res) => {
        const show_type = req.params.type_show;
        try {
            const title = await titles.getALLParType(show_type);
            if (!title) {
                res.status(404).json({ error: `show type :${show_type} not found` });
            } else {
                res.json(title);
            }
        } catch (error) {
            console.error('Error fetching all titles:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
};

    module.exports = TitreControlleur;