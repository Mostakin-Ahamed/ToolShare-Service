import './Banner.css'
const Banner = () => {
    return (
        <div>
            <div className='mt-16 pl-10 lg:ml-64'>
                <h2 id='header'>😎 GIVING YOU THE BEST TOOLS FOR HIRE</h2>
                <div id='header-text'>
                    <p>saving your time and money<br /> with shareable tools.</p>
                </div>
                <div className='lg:flex justify-between '>
                    <div>
                        <div className='mt-4'>
                            <div>
                                <div id='support-text' className='flex gap-8'>
                                    <div className='flex justify-evenly'>
                                        <img className='mr-3' src="/Group.svg" alt="" />
                                        <p>24/7 Online Support</p>
                                    </div>
                                    <div className='flex justify-evenly'>
                                        <img className='mr-3' src="/Group.svg" alt="" />
                                        <p>Quick Communication</p>
                                    </div>
                                </div>
                            </div>
                            <div className='w-[358px] mt-8 text-justify'>
                                <p>Saving both your time and money! Because your satisfaction is everything. We are providing the best tools for hire. You can also share your unused tools here!</p>
                            </div>
                            <div>
                                <div>
                                    <button className='w-[257px] absolute h-[55px] bg-[#FE7E41] mt-9 font-semibold text-base text-white spacing-5'>BROWSE OUR SERVICES</button>
                                    <button className='static w-[257px] h-[55px] border-solid border-2 mt-12 ml-5 border-black'></button>
                                </div>
                                <div >
                                    <img src="/Union.svg" className='static ml-[315px] lg:ml-96 -mt-7 mb-7' alt="" />
                                </div>
                            </div>
                            <div className=''>
                                <img src="/Icon.svg" className='mt-20 hidden lg:block' alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='pr-10 lg:mr-60'>
                        <img className='lg:h-[480px] lg:w-[718px] object-cover mb-20' src="/BannerImage.png" alt="" />
                        <img className='absolute ml-44 -mt-64 lg:ml-80 lg:-mt-[350px]' src="/Play video.svg" alt="" />
                    </div>
                </div>
                <hr className='border-dashed border-gray-400' />
            </div>
        </div>
    );
};

export default Banner;