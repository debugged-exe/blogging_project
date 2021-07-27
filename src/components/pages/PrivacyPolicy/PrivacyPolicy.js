import React from 'react';
import './privacy.css';
import 'tachyons';

const PrivacyPolicy = () => {
    return (
        <section className={'bg-white pt6 pb4'}>
            <div>
                <h1>
                    Privacy Policy
                </h1>
                <div className={'center w-80 tl lh-copy'}>
                    <h3>Add a Subheading</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book.</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book.</p>
                </div>
            </div>
            <div>
                <div className={'center w-80 tl lh-copy'}>
                    <h3>Add a Subheading </h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book.</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book.</p>
                </div>
                <div className={'center w-80 tl pt3'}>
                    <p className={'pb2 f5'}>
                        <input type={'checkbox'} name={'accept'} className={'check-button'} /><label className={'b'}> I have read
                        all the policies</label>
                    </p>
                    <button className={'ba b--white-025 f6 grow br4 ph3 pv2 mb2 dib white bg-blue'}>Accept</button>
                </div>
            </div>
        </section>
    )
}

export default PrivacyPolicy;