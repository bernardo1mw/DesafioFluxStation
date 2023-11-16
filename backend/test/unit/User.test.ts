import { User } from '../../src/domain/entities';

test.only('Deve criar um novo usuario', async () => {
	const user = await User.create('joao@gmail.com', '1234', 'joao');
	const isValidPassword = await user.validatePassword('1234');
	expect(isValidPassword).toBeTruthy();
});

test.only('Deve criar um usuario a partir do bd', async () => {
	const user = await User.buildExistingUser(
		'joao@gmail.com',
		'83e4b603691595cae1e33250a0400e31e7d1656aa90a8b79cdb2e9029373e3d34989c7beceae94cb16cbec521e5c825ab766fba8a8974b55e30b8bda420ad6cc',
		'salt',
	);
	const isValidPassword = await user.validatePassword('1234');
	expect(isValidPassword).toBeTruthy();
});
