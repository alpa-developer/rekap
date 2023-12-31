import React from 'react'

const Tim = () => {
  return (
    <div className='my-5'>
        <h1 className='text-center text-3xl font-bold mb-3'>Tim Kami</h1>

        <div className="grid gap-2 mb-8 rounded-lg md:mb-12 py-3 px-2 md:grid-cols-2 xl:grid-cols-3 bg-white">
            <CardTim
                jobdesk="Lead and Fullstcak Developer"
                name="Yudha Ginong Pratidina"
                nim="21104410001"
                image="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
                description="
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit laboriosam repudiandae aliquid.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit laboriosam repudiandae aliquid.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit laboriosam repudiandae aliquid."
            />
            <CardTim
                jobdesk="Front End Developer | Support"
                name="Hilga Satria Pambudi"
                nim="21104410009"
                image="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
                description="
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit laboriosam repudiandae aliquid.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit laboriosam repudiandae aliquid.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit laboriosam repudiandae aliquid."
            />
            <CardTim
                jobdesk="Support | Resource Management"
                name="Nugroho Nurwanda Zakaria"
                nim="21104410031"
                image="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
                description="
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit laboriosam repudiandae aliquid.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit laboriosam repudiandae aliquid.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit laboriosam repudiandae aliquid."
            />
            <CardTim
                jobdesk="Support | Report Preparer"
                name="Bayu Samudra"
                nim="21104410034"
                image="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
                description="
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit laboriosam repudiandae aliquid.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit laboriosam repudiandae aliquid.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit laboriosam repudiandae aliquid."
            />
            <CardTim
                jobdesk="Resource Management | PPT Maker | Report Preparer"
                name="Intan Aisyah Wulandari"
                nim="21104410018"
                image="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
                description="
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit laboriosam repudiandae aliquid.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit laboriosam repudiandae aliquid.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit laboriosam repudiandae aliquid."
            />
        </div>
    </div>
  )
}



const CardTim = (props) => {

    const {
        description = '-', 
        name = 'your name', 
        nim = 'your nim',
        jobdesk = 'your job desk', 
        image = 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png'
    } = props
    return (
        <figure className="flex flex-col items-center justify-center p-8 text-center bg-white shadow">
            <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8">
                <h3 className="text-lg font-semibold text-gray-900">{jobdesk}</h3>
                <p className="my-4">{description}</p>
            </blockquote>
            <figcaption className="flex items-center justify-center ">
                <img className="rounded-full w-9 h-9" src={image} alt={name}/>
                <div className="space-y-0.5 font-medium text-left rtl:text-right ms-3">
                    <div>{name}</div>
                    <div className="text-sm text-gray-500">{nim}</div>
                </div>
            </figcaption>    
        </figure>
    )
}

export default Tim