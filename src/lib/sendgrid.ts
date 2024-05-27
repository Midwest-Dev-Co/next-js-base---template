import { createSafeActionClient } from 'next-safe-action';
import nodemailer from 'nodemailer';
import nodemailerSendgrid from 'nodemailer-sendgrid';
import { SendEmailOptions } from 'payload/types';

export function sendgrid() {
    return 'sendgrid';
}

export const createSafeAction = createSafeActionClient();

export const sendGridEmailAdapter = () => {
    const transporter = nodemailer.createTransport(
        nodemailerSendgrid({
            apiKey: process.env.SENDGRID_API_KEY!,
        })
    );

    return {
        name: 'Admin',
        defaultFromAddress: 'support@midwestdevco.com',
        defaultFromName: 'Admin',
        sendEmail: async (message: SendEmailOptions) => {
            return transporter.sendMail({
                ...message,
                from: `${message.sender || 'Admin'}`,
            });
        },
    };
};

export default function executionResult<Payload>(
    payload: Payload,
    success: boolean
) {
    return {
        payload,
        success,
    };
}
