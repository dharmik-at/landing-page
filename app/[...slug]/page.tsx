import { Metadata } from 'next'
import RedirectClient from './redirect-client'

export const metadata: Metadata = {
    title: 'Page Not Found',
    robots: {
        index: false,
        follow: false,
    },
}

export default function CatchAll() {
    return <RedirectClient />
}
