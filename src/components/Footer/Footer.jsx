import React from 'react';
import logoImg from '../../assets/images/logo.png'
import './footer.css'
import { Link } from 'react-router';


const Footer = () => {
    return (
        <footer className="bg-[#001931] text-neutral-content p-8">
            <div className='max-w-[1440px] mx-auto'>
                <div className='footer-cols flex flex-col md:flex-row justify-between pb-4'>
                    <nav className='flex items-center'>
                        <Link to="/" className='flex items-center '>
                            <img src={logoImg} className='mr-2' alt="Footer Logo" width="40" height="40" /> <span>HERO.IO</span>
                        </Link>
                    </nav>
                      <nav>
                        <h6 className="footer-title">Services</h6>
                        <div className='flex flex-col gap-4'>
                            <Link to="/Branding" className='link link-hover'>Branding</Link>
                            <Link to="/Design" className='link link-hover'>Design</Link>
                            <Link to="/Marketing" className='link link-hover'>Marketing</Link>
                            <Link to="/Advertisement" className='link link-hover'>Advertisement</Link>
                        </div>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Company</h6>
                        <div className='flex flex-col gap-4'>
                            <Link to="/about" className='link link-hover'>About us</Link>
                            <Link to="/contact" className='link link-hover'>Contact</Link>
                            <Link to="/terms" className='link link-hover'>Terms of use</Link>
                            <Link to="/privacy" className='link link-hover'>Privacy policy</Link>
                        </div>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Social Links</h6>
                        <div className='flex gap-4'>
                            <Link to="https://linkedin.com/" target="_blank" className='link link-hover'>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 0C4.47734 0 0 4.47734 0 10C0 15.5227 4.47734 20 10 20C15.5227 20 20 15.5227 20 10C20 4.47734 15.5227 0 10 0Z" fill="white"/>
                                    <path d="M11.0941 9.09531L15.375 4.11914H14.3606L10.6435 8.43989L7.67468 4.11914H4.25049L8.73993 10.6529L4.25049 15.8712H5.26498L9.19033 11.3083L12.3256 15.8712H15.7498L11.0939 9.09531H11.0941ZM5.6305 4.88284H7.1887L14.361 15.1422H12.8029L5.6305 4.88284Z" fill="black"/>
                                </svg>
                            </Link>
                            <Link to="https://linkedin.com/" target="_blank" className='link link-hover'>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="white"/>
                                    <path d="M15.975 10.8052V14.928H13.5847V11.0815C13.5847 10.1157 13.2396 9.45615 12.3741 9.45615C11.7137 9.45615 11.3213 9.9002 11.1481 10.3302C11.0851 10.4838 11.0689 10.6972 11.0689 10.9127V14.9278H8.67845C8.67845 14.9278 8.71054 8.41316 8.67845 7.7388H11.0691V8.75755C11.0643 8.76558 11.0575 8.77342 11.0532 8.78109H11.0691V8.75755C11.3867 8.26877 11.9533 7.56999 13.2234 7.56999C14.796 7.56999 15.975 8.59748 15.975 10.8052ZM6.17783 4.27344C5.36015 4.27344 4.8252 4.81018 4.8252 5.51537C4.8252 6.20559 5.34464 6.75784 6.14645 6.75784H6.16196C6.99568 6.75784 7.51406 6.20559 7.51406 5.51537C7.4982 4.81018 6.99568 4.27344 6.17783 4.27344ZM4.96727 14.928H7.35684V7.7388H4.96727V14.928Z" fill="black"/>
                                </svg>
                            </Link>                        
                            <Link to="https://facebook.com/" target="_blank" className='link link-hover'>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 10C20 14.9914 16.343 19.1285 11.5625 19.8785V12.8906H13.8926L14.3359 10H11.5625V8.12422C11.5625 7.3332 11.95 6.5625 13.1922 6.5625H14.4531V4.10156C14.4531 4.10156 13.3086 3.90625 12.2145 3.90625C9.93047 3.90625 8.4375 5.29063 8.4375 7.79688V10H5.89844V12.8906H8.4375V19.8785C3.65703 19.1285 0 14.9914 0 10C0 4.47734 4.47734 0 10 0C15.5227 0 20 4.47734 20 10Z" fill="white"/>
                                    <path d="M13.8926 12.8906L14.3359 10H11.5625V8.12418C11.5625 7.33336 11.9499 6.5625 13.1921 6.5625H14.4531V4.10156C14.4531 4.10156 13.3088 3.90625 12.2146 3.90625C9.93043 3.90625 8.4375 5.29063 8.4375 7.79688V10H5.89844V12.8906H8.4375V19.8785C8.94664 19.9584 9.46844 20 10 20C10.5316 20 11.0534 19.9584 11.5625 19.8785V12.8906H13.8926Z" fill="black"/>
                                </svg>
                            </Link>                        
                        </div>
                    </nav>
                </div>
                <div className='text-center border-t-1 border-[#E5E7EB]/20 pt-4'>
                    <p>Copyright © 2025 - All right reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;