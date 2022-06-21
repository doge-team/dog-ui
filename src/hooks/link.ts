import { openTypeEnum } from "@/const/const-source";
import { Navigation } from "@/models/navigation";
import router from "@/router";

export const useLinkHooks = () => {
    const onNavLinkClick = (nav: Navigation) => {
        if(nav.openType === openTypeEnum.TARGET_REDIRECTION) {
            window.open(nav.prefix + nav.link, '_blank');
        } else {
            router.push(nav.link);
        }
    }

    return {
        onNavLinkClick
    }
}