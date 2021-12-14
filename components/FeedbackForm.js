import Image from 'next/image'
import logo from '../public/supreme_senacor.png'

const FeedbackForm = () => {
    return (<>
        <form className="w-full max-w-lg" name="Merch" method="POST" data-netlify="true">
            <Image src={logo}/>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                    </label>
                    <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="                        Which Senacor merch do you wanna see next?
"/>
                    <button className="bg-alizarin-crimson text-white font-bold py-3 px-4" type="submit">whish for it!</button>
                </div>
            </div>
        </form>
    </>)

}

export default FeedbackForm