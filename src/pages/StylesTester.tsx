import React from 'react'

export default function StylesTester() {
  return (
    <div className="flex flex-row gap-2">
        <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-2">
                <h1>Header 1</h1>
                <h2>Header 2</h2>
                <h3>Header 3</h3>
                <h4>Header 4</h4>
                <h5>Header 5</h5>
                <h6>Header 6</h6>
            </div>
            <div className="flex flex-col gap-2">
                <div className="flex items-center justify-center p-2 button button-accent">Accent button</div>
                <div className="flex items-center justify-center p-2 button button-transparent">Transparent button</div>
            </div>
        </div>
        <div className="flex flex-col gap-2">
            <div className="size-15 flex items-center justify-center bg-accent">accent</div>
            <div className="size-15 flex items-center justify-center bg-green">green</div>
            <div className="size-15 flex items-center justify-center bg-orange">orange</div>
            <div className="size-15 flex items-center justify-center bg-skyblue">skyblue</div>
            <div className="size-15 flex items-center justify-center bg-blue">blue</div>
            <div className="size-15 flex items-center justify-center bg-red">red</div>
            <div className="size-15 flex items-center justify-center bg-grey">grey</div>
            <div className="size-15 flex items-center justify-center bg-darkgrey">darkgrey</div>
            <div className="size-15 flex items-center justify-center bg-white">white</div>
        </div>
    </div>
  )
}
