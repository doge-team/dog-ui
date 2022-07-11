import { openTypeEnum } from "@/const/const-source";
import { Navigation } from "@/models/navigation";
import router from "@/router";

export const useLinkHooks = () => {
    const onNavLinkClick = (nav: Navigation) => {
        router.push(nav.link);
    }

    const onMenuClick = (link: string) => {
        if(!link) {
            return;
        }

        if(link.indexOf('#') > -1) {
            gotoAnchor(link);
        } else {
            router.push(link);
        }
    }

    const gotoAnchor = (anchor: string) => {
        const el = document.getElementById(anchor);
        if(!el) {
            return;
        }
        el.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
        });
    }

    return {
        onNavLinkClick,
        onMenuClick
    }
}