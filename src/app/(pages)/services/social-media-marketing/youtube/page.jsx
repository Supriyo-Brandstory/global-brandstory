import CommonDivider from '@/component/pages/common/CommonDivider'
import {Banner} from '@/component/pages/YoutubeMarketing/Banner'
import {AYoutubeChannel} from '@/component/pages/YoutubeMarketing/AYoutubeChannel'
import {YoutubeContent} from '@/component/pages/YoutubeMarketing/YoutubeContent'
import {PowerfulVideo} from '@/component/pages/YoutubeMarketing/PowerfulVideo'
import {YoutubeSeo} from '@/component/pages/YoutubeMarketing/YoutubeSeo'
import {CreatingClick} from '@/component/pages/YoutubeMarketing/CreatingClick'
import {YoutubeLive} from '@/component/pages/YoutubeMarketing/YoutubeLive'
import {AdvancedAnalytics} from '@/component/pages/YoutubeMarketing/AdvancedAnalytics'
import {YoutubeCampaign} from '@/component/pages/YoutubeMarketing/YoutubeCampaign'
import {Faq} from '@/component/pages/YoutubeMarketing/Faq'
import {Adv} from '@/component/pages/YoutubeMarketing/Adv'
import { getPageMetadata } from "@/app/(pages)/metadata";

export const metadata = getPageMetadata("youtube-marketing");

const page = () =>{
    return(
        <>
            <Banner />
            <CommonDivider /><AYoutubeChannel />
            <CommonDivider /><YoutubeContent />
            <CommonDivider /><PowerfulVideo />
            <CommonDivider /><YoutubeSeo />
            <CommonDivider /><CreatingClick />
            <CommonDivider /><YoutubeLive />
            <CommonDivider /><AdvancedAnalytics />
            <CommonDivider /><YoutubeCampaign />
            <CommonDivider /><Faq/>
            <CommonDivider /><Adv />
        </>
    )
}
 
export default page;