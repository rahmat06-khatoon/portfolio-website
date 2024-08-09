"use server";


import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";
import React from "react";
import { send } from "process";


const resend = new Resend(process.env.RESEND_API_KEY);


export const senderEmail = async(formData: FormData) =>{

    const senderEmail = formData.get('senderEmail');
    const message = formData.get('message');

    if(!validateString(senderEmail,500) ){
        return {
            error:"Invalid Sender Email",
        }
    }

    if(!validateString(message,5000))
        {
            return {
                error:"Invalid Message",
            }
    }
    let data;
    try{
       data = await resend.emails.send({
            from: 'Contact Form <onboarding@resend.dev>',
            to: 'rahmatunnisa1106@gmail.com',
            subject: "Message from contact form",
            reply_to: senderEmail as string,
            react: React.createElement(ContactFormEmail,{
                message: message as string, 
                senderEmail: senderEmail as string,
            }),
            //react: <ContactFormEmail message={message} senderEmail={senderEmail/>
        });
    }catch(error: unknown){
        return{
            error: getErrorMessage(error),
        };
    }
    return {
        data,
    };
};