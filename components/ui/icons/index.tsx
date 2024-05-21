import { SVGAttributes } from 'react'
import TvTwoFill from './TvTwoFill'
import TvTwoLine from './TvTwoLine'
import HeartLine from './HeartLine'
import LoveLine from './LoveLine'
import LoveFill from './LoveFill'
import CalendarLine from './CalendarLine'
import CalendarFill from './CalendarFill'
import TvOneFill from './TvOneFill'
import TvOneLine from './TvOneLine'
import PaperLine from './PaperLine'
import PaperFill from './PaperFill'
import NotificationLine from './NotificationLine'
import SearchThreeLine from './SearchThreeLine'
import CloseLine from './CloseLine'
import NotificationOffLine from './NotificationOffLine'
import NotificationFill from './NotificationFill'
import HeartFill from './HeartFill'
import RightLine from './RightLine'
import LeftLine from './LeftLine'
import Google from './Google'
import LogoLoading from './LogoLoading'

export type IconType =
    | 'TvTwoFill'
    | 'TvTwoLine'
    | 'HeartLine'
    | 'LoveLine'
    | 'LoveFill'
    | 'CalendarLine'
    | 'CalendarFill'
    | 'TvOneFill'
    | 'TvOneLine'
    | 'PaperLine'
    | 'PaperFill'
    | 'NotificationLine'
    | 'SearchThreeLine'
    | 'CloseLine'
    | 'NotificationOffLine'
    | 'NotificationFill'
    | 'HeartFill'
    | 'RightLine'
    | 'LeftLine'
    | 'Google'
    | 'LogoLoading'

export interface IconProps extends SVGAttributes<SVGElement> {
    children?: never
    color?: string
    icon: IconType
}
const Icon = (props: IconProps) => {
    const { icon, ...svgProps } = props
    const Icons: Record<IconProps['icon'], any> = {
        TvTwoFill: <TvTwoFill {...svgProps} />,
        TvTwoLine: <TvTwoLine {...svgProps} />,
        HeartLine: <HeartLine {...svgProps} />,
        LoveLine: <LoveLine {...svgProps} />,
        LoveFill: <LoveFill {...svgProps} />,
        CalendarLine: <CalendarLine {...svgProps} />,
        CalendarFill: <CalendarFill {...svgProps} />,
        TvOneFill: <TvOneFill {...svgProps} />,
        TvOneLine: <TvOneLine {...svgProps} />,
        PaperLine: <PaperLine {...svgProps} />,
        PaperFill: <PaperFill {...svgProps} />,
        NotificationLine: <NotificationLine {...svgProps} />,
        SearchThreeLine: <SearchThreeLine {...svgProps} />,
        CloseLine: <CloseLine {...svgProps} />,
        NotificationOffLine: <NotificationOffLine {...svgProps} />,
        NotificationFill: <NotificationFill {...svgProps} />,
        HeartFill: <HeartFill {...svgProps} />,
        RightLine: <RightLine {...svgProps} />,
        LeftLine: <LeftLine {...svgProps} />,
        Google: <Google {...svgProps} />,
        LogoLoading: <LogoLoading {...svgProps} />,
    }
    return Icons[icon]
}

export default Icon
