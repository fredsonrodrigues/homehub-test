import breeds from '../../../mocks/breeds.json';

export default (req, res) => {
    res.status(200).json(breeds)
}