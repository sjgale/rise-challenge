import IcomoonReact from 'icomoon-react'
import iconSet from '../icons-selection.json'

export default function Icon({
    color = 'silver',
    size = '100%',
    icon,
    className = ''
}) {
    return (
        <IcomoonReact
            className={className}
            iconSet={iconSet}
            color={color}
            size={size}
            icon={icon}
        />
    )
}
