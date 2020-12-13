import { validDomains, errors } from './consts'

const { noEmail, invalidEmailDomain } = errors

export const validateEmail = async (rule, email) => {
  if(!email) throw new Error(noEmail)
  const [, domain] = email.split('@')
  const valid = validDomains.includes(domain)
  if(!valid) throw new Error(invalidEmailDomain)
}