import { isEmpty, isArray } from 'lodash';
import Link from 'next/link';
import { sanitize } from '../../../utils/miscellaneous';

const Footer = ({ footer, footerMenus }) => {

    return(
        <footer className="bg-gray-800">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 flex flex-wrap overflow-hidden text-white">

                {/* Widget One */}
                <div className="my-px px-px w-full overflow-hidden md:w-1/2 xl:my-2 xl:px-2 xl:w-1/3">
                    <div dangerouslySetInnerHTML={{ __html: sanitize( footer?.sidebarOne ) }} />
                </div>

                {/* Widget Two */}
                <div className="my-px px-px w-full overflow-hidden md:w-1/2 xl:my-2 xl:px-2 xl:w-1/3">
                    <div dangerouslySetInnerHTML={{ __html: sanitize( footer?.sidebarTwo ) }} />
                </div>

                {/* Footer Menu */}
                <div className="my-px px-px w-full overflow-hidden md:w-1/2 xl:my-2 xl:px-2 xl:w-1/3">
                    { ! isEmpty( footerMenus ) && isArray( footerMenus )  ? (
                        <ul>
                            { footerMenus?.map( footerMenu => (
                                <li key={ footerMenu?.node?.id }>
                                    <Link href={ footerMenu?.node?.path }>
                                        <a>{footerMenu?.node?.label}</a>
                                    </Link>
                                </li>
                            ) ) }
                        </ul>
                    ) : null }
                </div>

            </div>
            <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 text-white pb-8 mt-8 flex flex-wrap overflow-hidden">
                <div class=" px-1 w-full overflow-hidden xl:w-1/2">
                    { footer?.copyrightText ? sanitize( footer.copyrightText ) : 'Kishan Jasani 2021' }  
                </div>
                <div class=" px-1 w-full overflow-hidden xl:w-1/2">
                    
                </div>
            </div>
        </footer>
    );
}

export default Footer;