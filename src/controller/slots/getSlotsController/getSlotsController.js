const catchingErrors = require("../../../utils/catchingErrors");

const slots = require("../../../data/slots.json");

const getSlotsController = async (req, res) => {
	res.status(200).json(slots);
};

module.exports = catchingErrors(getSlotsController);