import Password from '../../src/domain/value-objects/Password';

test('Deve criar uma senha', async () => {
	const password = await Password.create('1234', 'salt');
	expect(password.getValue()).toBe(
		'83e4b603691595cae1e33250a0400e31e7d1656aa90a8b79cdb2e9029373e3d34989c7beceae94cb16cbec521e5c825ab766fba8a8974b55e30b8bda420ad6cc',
	);
});

test('Deve validar uma senha', async () => {
	const password = new Password(
		'83e4b603691595cae1e33250a0400e31e7d1656aa90a8b79cdb2e9029373e3d34989c7beceae94cb16cbec521e5c825ab766fba8a8974b55e30b8bda420ad6cc',
		'salt',
	);
	const isValid = await password.validate('1234');
	expect(isValid).toBeTruthy();
});
