const catchingErrors = require("../../../utils/catchingErrors");
const services = require("../../../data/services.json");
const getServicesController = async (req, res) => {
	const arrCategories = [];
	for(let i = 0 ; i < services.services.length ; i++) {
		if(!arrCategories.includes(services.services[i]["category"])){	
			arrCategories.push(services.services[i]["category"]);
		}
	}
	const response = {
		catgories:[]
	};
	//! Esto lo que hace es agrupar de una mejor manera los servicos por categorias para que esten todos juntos. Puede que se pueda mejorar la logica.
	for(let i = 0 ; i < arrCategories.length ; i++) {
		const categoryTofilter = arrCategories[i];
		const arrServicesByCategory = [];
		for(let k = 0 ; k < services.services.length ; k++) {
			if(services.services[k]["category"] === categoryTofilter){
				arrServicesByCategory.push(services.services[k]);
			}
			if(k === services.services.length -1) {
				response.catgories.push({
					category:categoryTofilter,
					services:arrServicesByCategory
				});
	
			}
		}
		
	}


	res.status(200).json(response);
};




module.exports = catchingErrors(getServicesController);