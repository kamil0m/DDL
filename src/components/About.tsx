import React from 'react'

export default function About() {
  return (
    <div className="flex flex-row justify-center items-between mt-40">
        <div className="flex flex-row items-center w-1/2 gap-8">
            <div className="flex flex-col gap-8">
                <div className="h-[320px] w-[270px] bg-slate-500 rounded-lg"></div>
                <div className="h-[320px] w-[270px] bg-slate-500 rounded-lg"></div>
            </div>
            <div className="h-[400px] w-[270px] bg-slate-500 rounded-lg"></div>
        </div>
        <div className="flex flex-col justify-center w-1/2 gap-6">
            <h2>About us</h2>
            <h3>Insert short <br/>presentation text here</h3>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less.</p>
            <p>A domain name is one of the first steps to establishing your brand. Secure a consistent brand image with a domain name that matches your business.</p>
            <a href="" className="button button-blue size-fit px-6 py-3 text-xl font-light">Join us on Facebook !</a>

        </div>
    </div>
  )

}
