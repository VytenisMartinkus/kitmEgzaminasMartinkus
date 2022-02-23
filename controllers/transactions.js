const Transaction = require('../models/Transcation');

// @desc Gauname visas Pajamas/išlaidas
// @route GET /api/v1/transactions
// @access Public
exports.getTransactions = async (req, res, next) => {
    try {
        const transactions = await Transaction.find();
        
        return res.status(200).json({
            success: true,
            count: transactions.length,
            data: transactions
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}
// @desc spausdiname visas pajamas
// @route GET /api/v1/transactions
// @access Public
exports.addTransactions = async (req, res, next) => {
    try {
        const { text, amount } = req.body;

    const transaction = await Transaction.create(req.body);

    return res.status(200).json({
        success: true,
        data: transaction
    });
    } catch (error) {
        console.log(error);
    }
}
// @desc Delete
// @route GET /api/v1/transactions
// @access Public
 exports.deleteTransactions  = (req, res, next) => {
    res.send('DELETE transactions');
}
