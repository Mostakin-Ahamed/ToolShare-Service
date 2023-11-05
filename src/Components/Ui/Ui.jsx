import './Ui.css'
const Ui = () => {
    return (
        <div className="lg:flex mt-36 lg:ml-64 mb-12">
            <div className='pl-6 lg:mr-40'>
                <div className='mb-16'>
                    <h2 className="header text-2xl font-extrabold">UI/UX DESIGN</h2>
                    <div className='flex'>
                        <p className='mb-10 w-[358px] mt-6'>Saving World with Good Designs. Because your satisfaction is everything.</p>
                        <a className='text-end font-bold text-xl lg:mt-16 mt-12 mr-4 lg:mr-0 lg:ml-8' href="">Learn More</a>
                    </div>
                    <hr />
                </div>
                <div className='mb-16'>
                    <h2 className="header text-2xl font-extrabold">DEVELOPMENT</h2>
                    <div className='flex'>
                        <p className='mb-10 w-[358px] mt-6'>Saving World with Good Designs. Because your satisfaction is everything.</p>
                        <a className='text-end font-bold text-xl lg:mt-16 mt-12 mr-4 lg:mr-0 lg:ml-8' href="">Learn More</a>
                    </div>
                    <hr />
                </div>
                <div className='mb-16'>
                    <h2 className="header text-2xl font-extrabold">DIGITAL MARKETING</h2>
                    <div className='flex'>
                        <p className='mb-10 w-[358px] mt-6'>Saving World with Good Designs. Because your satisfaction is everything.</p>
                        <a className='text-end font-bold text-xl lg:mt-16 mt-12 mr-4 lg:mr-0 lg:ml-8' href="">Learn More</a>
                    </div>
                    <hr />
                </div>
                <div className='mb-16'>
                    <h2 className="header text-2xl font-extrabold">PRODUCT BRANDING</h2>
                    <div className='flex'>
                        <p className='mb-10 w-[358px] mt-6'>Saving World with Good Designs. Because your satisfaction is everything.</p>
                        <a className='text-end font-bold text-xl lg:mt-16 mt-12 mr-4 lg:mr-0 lg:ml-8' href="">Learn More</a>
                    </div>
                    <hr />
                </div>
            </div>
            <div className='ml-2 mt-16 lg:ml-36'>
                <div className='mb-8  lg:ml-0'>
                    <p className='text-gray-400 '>OUR SERVICES</p>
                    <h2 className='header1'>come on, we will help you buIld your dream project.</h2>
                </div>
                <div className='flex lg:gap-0 gap-3'>
                    <div><img className='h-[406px] w-[248px] object-cover mr-5 mt-6' src="/uiImage.png" alt="" /></div>
                    <div><img src="/Rectangle 18.png" alt="" /></div>
                </div>
            </div>


        </div>
    );
};

export default Ui;