import { validDomains, errors } from './consts'
import { validateEmail } from './utils'
const { noEmail, invalidEmailDomain } = errors

test('No email', async () => {
  expect.assertions(1);
  try {
    await validateEmail(null, '')
  } catch(e) {
    expect(e.message).toBe(noEmail)
  }
})

test('Invalid email domain', async () => {
  expect.assertions(1);
  try {
    await validateEmail(null, 'name@invalidDomain.com')
  } catch(e) {
    expect(e.message).toBe(invalidEmailDomain)
  }
})

test('Valid email', async() => {
  expect.assertions(1);
  const result = await validateEmail(null, `name@${validDomains[0]}`)
  expect(result).toBe(undefined)
})