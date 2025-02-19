import { getImagePath } from "@/utils/imagePath";

export const carouselData = [
    {
        id: 1,
        image: getImagePath('/images/utils/prgHero.jpg'),
        title: 'Support Our Cause',
        description: 'Help us make a difference in the community'
    },
    {
        id: 2,
        image: getImagePath('/images/utils/prgSembako.jpg'),
        title: 'Every Donation Counts',
        description: 'Your contribution helps us grow'
    },
    {
        id: 3,
        image: getImagePath('/images/utils/prgWakaf.jpg'),
        title: 'Join Our Mission',
        description: 'Be part of something bigger'
    }
]
