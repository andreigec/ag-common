import { notEmpty } from './array';

const regex =
  /^[-!#$%&'*+/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

export const isEmailValid = (email: string | undefined) => {
  if (!email) return false;

  if (email.length > 256) return false;

  const valid = regex.test(email);
  if (!valid) return false;

  const parts = email.split('@');
  if (parts[0].length > 64) return false;

  const domainParts = parts[1].split('.');
  if (domainParts.some((part) => part.length > 64)) {
    return false;
  }

  return true;
};

export const getEmailErrors = (email: string, event: { creatorId: string }) => {
  if (!isEmailValid(email)) {
    return `email not valid:${email}`;
  }

  if (event.creatorId === email) {
    return `You cannot add the creator of this event as an admin`;
  }
  return undefined;
};

export const getEmailsErrors = (
  emails: string[],
  event: { creatorId: string },
) => emails.map((email) => getEmailErrors(email, event)).filter(notEmpty);
