import { createSafeActionClient } from 'next-safe-action';

export function sendgrid() {
  return 'sendgrid';
}

export const createSafeAction = createSafeActionClient();

export default function executionResult<Payload>(
  payload: Payload,
  success: boolean,
) {
  return {
    payload,
    success,
  };
}
