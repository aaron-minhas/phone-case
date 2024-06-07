import Link from 'next/link'
import React from 'react'

export default function NotFound() {
    return (
        <>
            <div className='flex flex-col justify-center items-center mt-48'>
                <h1 className='text-7xl'>Not found 404!</h1>
                <div className='text-2xl'>
                    <Link href="/" className='text-green-700'>Go back to Home</Link>
                </div>
            </div>
        </>
    )
}
