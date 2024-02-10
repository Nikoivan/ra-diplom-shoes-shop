export default async function fetchApi(url: string) {
	const response = await fetch(url);

	if (response.status >= 300) {
		throw new Error('Ошибка запроса к серверу. Каталог');
	}

	const json = await response.json();

	if (!json) {
		throw new Error('Ошибка запроса к серверу. Каталог');
	}
	return json;
}
