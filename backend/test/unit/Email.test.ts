import Email from '../../src/domain/value-objects/Email';

test('Deve criar um email válido', () => {
	const email = new Email('joao@gmail.com');
	expect(email.getValue()).toBe('joao@gmail.com');
});

test('Deve criar um email inválido', () => {
	expect(() => new Email('joao@gmail')).toThrow(new Error('Invalid email'));
});
