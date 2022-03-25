import Link from 'next/link'
import DarkLayout from '../../components/layouts/DarkLayout'
import MainLayout from '../../components/layouts/MainLayout'

export default function Pricing() {
    return (
        <>
            <h2>Pricing Page</h2>

            <h1 className='title'>
                to <Link href="/">Home</Link>
            </h1>
            <p className='description'>
                Get started by editing{' '}
                <code className='code'>pages/pricing.js</code>
            </p>
        </>
    )
}

Pricing.getLayout = function getLayout(page: JSX.Element) {
    return (
        <MainLayout>
            <DarkLayout>
                { page }
            </DarkLayout>
        </MainLayout>
    )
}