import { validDomains, errors } from './consts'

const { noEmail, invalidEmailDomain } = errors

/**
 * Validates the domain of the given email, using
 * an array of valid domains. It's only mean to be 
 * used as the validator for a `Form.Item`.
 */
export const validateEmail = async (rule, email) => {
  if(!email) throw new Error(noEmail)
  const [, domain] = email.split('@')
  const valid = validDomains.includes(domain)
  if(!valid) throw new Error(invalidEmailDomain)
}