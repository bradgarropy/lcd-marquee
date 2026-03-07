import {useState} from "react"
import {Form} from "react-router"

export function meta() {
    return [
        {title: "New React Router App"},
        {name: "description", content: "Welcome to React Router!"},
    ]
}

export default function Home() {
    const [message, setMessage] = useState("")
    const [twitter, setTwitter] = useState("")

    const isDisabled = !message || !twitter

    return (
        <div className="flex min-h-screen items-center justify-center">
            <Form method="post" className="flex flex-col gap-4">
                <div className="flex flex-col">
                    <label htmlFor="message">Message</label>
                    <input
                        type="text"
                        id="message"
                        name="message"
                        className="w-80 border border-black px-4 py-2"
                        required
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="twitter">Twitter Handle</label>
                    <input
                        type="text"
                        id="twitter"
                        name="twitter"
                        className="w-80 border border-black px-4 py-2"
                        required
                        value={twitter}
                        onChange={e => setTwitter(e.target.value)}
                    />
                </div>

                <button
                    type="submit"
                    disabled={isDisabled}
                    className="cursor-pointer bg-black text-white px-4 py-2 hover:bg-gray-800 disabled:cursor-not-allowed disabled:bg-gray-400"
                >
                    Send
                </button>
            </Form>
        </div>
    )
}
