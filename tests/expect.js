test('Expect', async () => {
	const filePath = 'file:///' + import.meta.dirname + '/page.html';

	await browser.url(filePath);

	await expect($('#my-button')).toHaveText('My Button');
});
