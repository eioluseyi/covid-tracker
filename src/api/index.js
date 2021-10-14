const client = async (query = "") => {
	try {
		const response = await fetch(
			`https://my-json-server.typicode.com/eioluseyi/covid-tracker/${query}`,
			{
				headers: {
					"Access-Control-Allow-Origin": "*",
					Accept: "application/json;odata.metadata=full",
					"Content-Type": "application/json"
				}
			}
		);
		const data = await response.json();

		return data;
	} catch (error) {
		console.error(error);
	}
};

const getData = ({ type, range, country }) =>
	client(`${type}/${range}/${country}`);

export { getData };
