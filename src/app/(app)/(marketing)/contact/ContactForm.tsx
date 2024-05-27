'use client';

import { Input } from '@/components/forms/Input';
import { Textarea } from '@/components/forms/TextArea';
import { Loader2, Send } from 'lucide-react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/forms/Form';
import { useAction } from 'next-safe-action/hooks';
import { sendContactRequestEmail } from './_actions';
import { toast } from 'sonner';
import { Button } from '@/components/ui/Button';

const contactFormSchema = z.object({
    firstName: z.string().min(1, { message: 'First Name is required' }),
    lastName: z.string().min(1, { message: 'Last Name is required' }),
    email: z.string().email({ message: 'Invalid email address' }),
    phoneNumber: z.string().min(1, { message: 'Phone Number is required' }),
    message: z.string().min(1, { message: 'Message is required' }),
});

export default function ContactForm() {
    const form = useForm<z.infer<typeof contactFormSchema>>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            message: '',
        },
    });

    const { execute, status } = useAction(sendContactRequestEmail, {
        onSuccess: (data) => {
            if (data.success) {
                toast.success('Message Sent Successfully');
                form.reset();
            } else {
                toast.error('Failed To Send Message');
            }
        },
        onError: () => {
            toast.error('Failed To Send Message');
        },
    });

    return (
        <Form {...form}>
            <form
                className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48"
                onSubmit={form.handleSubmit(execute)}
            >
                <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                        {/* First Name */}
                        <FormField
                            control={form.control}
                            name="firstName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="block text-sm font-semibold leading-6 text-slate-900">
                                        First Name
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            type="text"
                                            {...field}
                                            placeholder="John"
                                            className="block w-full rounded-md border-0 px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                                        />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Last Name */}
                        <FormField
                            control={form.control}
                            name="lastName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="block text-sm font-semibold leading-6 text-slate-900">
                                        Last Name
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            type="text"
                                            {...field}
                                            placeholder="Doe"
                                            className="block w-full rounded-md border-0 px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                                        />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Email */}
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem className="sm:col-span-2">
                                    <FormLabel className="block text-sm font-semibold leading-6 text-slate-900">
                                        Email
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            type="email"
                                            {...field}
                                            placeholder="johndoe@gmail.com"
                                            className="block w-full rounded-md border-0 px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                                        />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Phone Number */}
                        <FormField
                            control={form.control}
                            name="phoneNumber"
                            render={({ field }) => (
                                <FormItem className="sm:col-span-2">
                                    <FormLabel className="block text-sm font-semibold leading-6 text-slate-900">
                                        Phone Number
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            type="phone"
                                            {...field}
                                            placeholder="(573) 555-5555"
                                            className="block w-full rounded-md border-0 px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                                        />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Message */}
                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <FormItem className="sm:col-span-2">
                                    <FormLabel className="block text-sm font-semibold leading-6 text-slate-900">
                                        Message
                                    </FormLabel>
                                    <FormControl>
                                        <Textarea
                                            {...field}
                                            placeholder="We own a local candle business and want to scale."
                                            className="block w-full rounded-md border-0 px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                                        />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="mt-8 flex justify-end">
                        <Button
                            type="submit"
                            disabled={status === 'executing'}
                            className="bg-palette-1 rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                        >
                            Send
                            {status === 'executing' ? (
                                <Loader2 className="ml-2 h-4 w-4 animate-spin" />
                            ) : (
                                <Send className="ml-2 h-4 w-4" />
                            )}
                        </Button>
                    </div>
                </div>
            </form>
        </Form>
    );
}
