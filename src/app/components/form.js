"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export const Form = ({ initialRef }) => {
    const initialState = {
        name: '',
        company: '',
        email: '',
        phone: '',
        contactMessage: '',
        formLocation: '',
        country: '',
        state: ''
    };

    const [formState, setFormState] = useState(initialState);
    const [toastMessage, setToastMessage] = useState({
        type: '',
        message: ''
    });

    const [campaignState, setCampaignState] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (!router.isReady) return;
        if (router.pathname && router.pathname.startsWith("/campaign/")) {
            setCampaignState(true);
        }
    }, [router.isReady, router.pathname]);

    const clearFormState = () => {
        setFormState({ ...initialState });
    };

    const handleContactFormSubmit = async (e) => {
        e.preventDefault();

        // Define SNS Topic ARN
        const SNS_TOPIC_ARN = "arn:aws:sns:us-east-1:697974131866:send-email-topic"; // Replace with your actual SNS ARN

        const formLocation = campaignState ? 'campaign-usAudit-blueprospect.com' : 'FryTech Brujeria Licensing Form';

        // Ensure required fields are filled
        if (!formState.name || !formState.email || !formState.contactMessage) {
            setToastMessage({
                message: (
                    <div className="text-lightRed.900 font-bold absolute -bottom-1 -mb-10">
                        Please fill out required fields (*Name, Email, and Message*).
                    </div>
                )
            });
            return;
        }

        // Format message for SNS
        const messageBody = `
            You just received a message:

            From: ${formState.name} <${formState.email}>
            Company: ${formState.company || "N/A"}
            Phone: ${formState.phone || "N/A"}
            Location: ${formLocation}
            Country: ${formState.country || "N/A"}
            State: ${formState.state || "N/A"}
            
            Message:
            ${formState.contactMessage}

            Regards,
            Fry Tech Licensing System
        `;

        // Prepare request for AWS SNS
        const requestBody = new URLSearchParams({
            "Action": "Publish",
            "TopicArn": SNS_TOPIC_ARN,
            "Message": messageBody,
            "Subject": `Message from ${formState.name}`
        });

        try {
            const response = await fetch("https://sns.us-east-1.amazonaws.com/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: requestBody
            });

            if (response.ok) {
                setToastMessage({
                    message: (
                        <div className="text-green-500 font-bold absolute bottom-0 -mb-10">
                            Thank you! Your message has been sent successfully.
                        </div>
                    )
                });
                clearFormState();
            } else {
                throw new Error(`Failed to send message. Status: ${response.status}`);
            }
        } catch (error) {
            console.error("SNS Email Error:", error);
            setToastMessage({
                message: (
                    <div className="text-lightRed.900 font-bold absolute bottom-0 -mb-10">
                        There was an error sending your message. Please try again later.
                    </div>
                )
            });
        }
    };

    return (
        <>
            <form onSubmit={handleContactFormSubmit}>
                <div className="flex flex-col relative">
                    {toastMessage.message}

                    <div className="flex flex-col">
                        <label>Name*</label>
                        <input
                            ref={initialRef}
                            className="text-darkBlue.700 border py-3 px-4 mb-4"
                            placeholder="Enter your name"
                            value={formState.name}
                            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        />
                    </div>

                    <div className="flex flex-col">
                        <label>Email*</label>
                        <input
                            className="text-darkBlue.700 border py-3 px-4 mb-4"
                            placeholder="yourname@email.com"
                            type="email"
                            value={formState.email}
                            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        />
                    </div>

                    <div className="flex flex-col">
                        <label>Company</label>
                        <input
                            className="text-darkBlue.700 border py-3 px-4 mb-4"
                            placeholder="Enter your company name"
                            value={formState.company}
                            onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                        />
                    </div>

                    <div className="flex flex-col">
                        <label>Phone</label>
                        <input
                            className="text-darkBlue.700 border py-3 px-4 mb-4"
                            placeholder="Enter your phone number"
                            value={formState.phone}
                            onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        />
                    </div>

                    <div className="flex flex-col">
                        <label>Questions/Comments</label>
                        <textarea
                            className="w-full border border-darkBlue.700 text-darkBlue.700 py-3 px-4 mb-4"
                            rows="2"
                            value={formState.contactMessage}
                            onChange={(e) => setFormState({ ...formState, contactMessage: e.target.value })}
                        />
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="text-medBlue.500 font-bold uppercase px-10 py-2 lg:mt-0 m-0 rounded-lg bg-tan.100 mb-4">
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
};
