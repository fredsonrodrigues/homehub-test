
export default function handler(req, res) {
    try {
        const {
            query: { pid },
        } = req
    
        const response = require(`../../../mocks/${pid}.json`);
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({ message: 'falha ao buscar id'});
    }
}