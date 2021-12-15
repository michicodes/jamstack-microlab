import Link from 'next/link'

export default function LoginButton() {
    return (
        <>
            <Link href="/api/login?returnTo=/orders">
                <button className="bg-alizarin-crimson text-white font-bold py-3 px-4">Login</button>
            </Link>
        </>
    )
}