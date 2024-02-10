export function getBaseUrl() {
	return 'http://localhost:6006';
}

function getCategoryUrl(categoryId: number) {
	return `categoryId=${categoryId}`;
}

function getOffSetUrl(offsetCount: number) {
	return `offset=${offsetCount}`;
}

export function getCatalogUrl(request: {
	search: string | null;
	categoryId: number | null;
	offsetCount?: number;
}): string {
	const { search, categoryId, offsetCount } = request;
	const symbols = ['?', '&', '&'];
	let count = 0;
	let url: string = `${getBaseUrl()}/api/items`;

	if (search) {
		url = `${url}${symbols[count]}q=${search}`;
		count += 1;
	}

	if (categoryId) {
		url = `${url}${symbols[count]}${getCategoryUrl(categoryId)}`;
		count += 1;
	}

	if (offsetCount) {
		url = `${url}${symbols[count]}${getOffSetUrl(offsetCount)}`;
	}

	return url;
}
