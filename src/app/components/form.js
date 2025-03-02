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

        const formLocation = campaignState ? 'campaign-usAudit-blueprospect.com' : 'FryTech Brujeria Licensing Form';
        const endpoint =
            "https://ke37371vfe.execute-api.us-east-1.amazonaws.com/default/sendContactLIcenseFryTech";

        const body = JSON.stringify({
            senderName: formState.name,
            senderCompany: formState.company,
            senderEmail: formState.email,
            senderPhone: formState.phone,
            message: formState.contactMessage,
            senderLocation: formLocation,
            senderCountry: formState.country,
            senderState: formState.state
        });

        const requestOptions = {
            method: "POST",
            body
        };

        const { name, email } = formState;

        if (name && email) {
            try {
                const res = await fetch(endpoint, requestOptions);
                if (res.status === 200 || res.status === 500) {
                    setToastMessage({
                        message: (
                            <div className={`${campaignState ? 'hidden' : 'block'} absolute bottom-0 text-white.100 -mb-10`}>
                                Thank you for reaching out to us. We&apos;ll respond to you shortly! Have a great day.
                            </div>
                        )
                    });
                    clearFormState();
                }
            } catch (e) {
                setToastMessage({
                    message: (
                        <div className="text-lightRed.900 font-bold absolute bottom-0 -mb-10">
                            Deepest apologies. There was an error with your request. Please try again later.
                        </div>
                    )
                });
            }
        } else {
            setToastMessage({
                message: (
                    <div className="text-lightRed.900 font-bold absolute -bottom-1 -mb-10">
                        Please verify all fields are filled out.
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
                        <label>Company</label>
                        <input
                            className="text-darkBlue.700 border py-3 px-4 mb-4"
                            placeholder="Enter your company name"
                            value={formState.company}
                            onChange={(e) => setFormState({ ...formState, company: e.target.value })}
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
                        <label>Phone</label>
                        <input
                            className="text-darkBlue.700 border py-3 px-4 mb-4"
                            placeholder="Enter your phone number"
                            value={formState.phone}
                            onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        />
                    </div>

                    <div className="flex flex-col">
                        <label>Country</label>
                        <select
                            className="text-darkBlue.700 border py-3 px-4 mb-4"
                            value={formState.country}
                            onChange={(e) => setFormState({ ...formState, country: e.target.value })}
                        >
                            <option value="">Select Country</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="MX">Mexico</option>
                            <option value="GB">United Kingdom</option>
                            <option value="AU">Australia</option>
                            <option value="DE">Germany</option>
                            <option value="FR">France</option>
                            <option value="IT">Italy</option>
                            <option value="ES">Spain</option>
                            <option value="JP">Japan</option>
                            <option value="CN">China</option>
                            <option value="IN">India</option>
                            <option value="BR">Brazil</option>
                            <option value="ZA">South Africa</option>
                            <option value="RU">Russia</option>
                            <option value="KR">South Korea</option>
                            <option value="SG">Singapore</option>
                        </select>
                    </div>

                    {formState.country === "US" && (
                        <div className="flex flex-col">
                            <label>State</label>
                            <select
                                className="text-darkBlue.700 border py-4 px-4 mb-4"
                                value={formState.state}
                                onChange={(e) => setFormState({ ...formState, state: e.target.value })}
                            >
                                <option value="">Select State</option>
                                <option value="AL">Alabama</option>
                                <option value="AK">Alaska</option>
                                <option value="AZ">Arizona</option>
                                <option value="AR">Arkansas</option>
                                <option value="CA">California</option>
                                <option value="CO">Colorado</option>
                                <option value="CT">Connecticut</option>
                                <option value="DE">Delaware</option>
                                <option value="FL">Florida</option>
                                <option value="GA">Georgia</option>
                                <option value="HI">Hawaii</option>
                                <option value="ID">Idaho</option>
                                <option value="IL">Illinois</option>
                                <option value="IN">Indiana</option>
                                <option value="IA">Iowa</option>
                                <option value="KS">Kansas</option>
                                <option value="KY">Kentucky</option>
                                <option value="LA">Louisiana</option>
                                <option value="ME">Maine</option>
                                <option value="MD">Maryland</option>
                                <option value="MA">Massachusetts</option>
                                <option value="MI">Michigan</option>
                                <option value="MN">Minnesota</option>
                                <option value="MS">Mississippi</option>
                                <option value="MO">Missouri</option>
                                <option value="MT">Montana</option>
                                <option value="NE">Nebraska</option>
                                <option value="NV">Nevada</option>
                                <option value="NH">New Hampshire</option>
                                <option value="NJ">New Jersey</option>
                                <option value="NM">New Mexico</option>
                                <option value="NY">New York</option>
                                <option value="NC">North Carolina</option>
                                <option value="ND">North Dakota</option>
                                <option value="OH">Ohio</option>
                                <option value="OK">Oklahoma</option>
                                <option value="OR">Oregon</option>
                                <option value="PA">Pennsylvania</option>
                                <option value="RI">Rhode Island</option>
                                <option value="SC">South Carolina</option>
                                <option value="SD">South Dakota</option>
                                <option value="TN">Tennessee</option>
                                <option value="TX">Texas</option>
                                <option value="UT">Utah</option>
                                <option value="VT">Vermont</option>
                                <option value="VA">Virginia</option>
                                <option value="WA">Washington</option>
                                <option value="WV">West Virginia</option>
                                <option value="WI">Wisconsin</option>
                                <option value="WY">Wyoming</option>
                            </select>
                        </div>
                    )}

                    <div>
                        <label className="">Questions/Comments</label>
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
