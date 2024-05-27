'use server';

import { z } from 'zod';
import * as mail from '@sendgrid/mail';
import executionResult, { createSafeAction } from '@/lib/sendgrid';

const contactFormSchema = z.object({
    firstName: z.string().min(1, { message: 'First Name is required' }),
    lastName: z.string().min(1, { message: 'Last Name is required' }),
    email: z.string().email({ message: 'Invalid email address' }),
    phoneNumber: z.string().min(1, { message: 'Phone Number is required' }),
    message: z.string().min(1, { message: 'Message is required' }),
});

async function contactFormAction(input: z.infer<typeof contactFormSchema>) {
    const {
        firstName,
        lastName,
        email,
        phoneNumber,
        message: emailMsg,
    } = input;

    try {
        mail.setApiKey(process.env.SENDGRID_API_KEY!);

        const message = `
      New inquiry from ${firstName + ' ' + lastName}\r\n
      Name: ${firstName + ' ' + lastName}\r\n
      Email: ${email}\r\n
      Phone Number: ${phoneNumber}\r\n
      Message: ${emailMsg}
    `;

        const data = {
            to: [process.env.NEXT_PUBLIC_CONTACT_EMAIL!],
            from: process.env.SENDGRID_EMAIL!,
            subject: 'New Website Form Submission',
            text: message,
            html: message.replace(/\r\n/g, '<br>'),
        };

        const sentMail = await mail.send(data);

        console.log('sentMail:', sentMail);

        return executionResult('Form Submitted!', true);
    } catch (error) {
        return executionResult('Failed To Submit Form.', false);
    }
}

export const sendContactRequestEmail = createSafeAction(
    contactFormSchema,
    contactFormAction
);
