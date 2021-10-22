import { useCallback, useEffect, useState } from 'react'
import { toggleCollapsible } from './Collapsible.utils'
import styles from './Collapsible.module.css'

export default function CollapsibleContainer({ isCollapsed, children }) {
    const [collapsibleNode, setCollapsibleNode] = useState(undefined)

    const collapsibleRef = useCallback((collapsibleNode) => {
        setCollapsibleNode(collapsibleNode)
    })

    useEffect(() => {
        if (!collapsibleNode) {
            return
        }

        toggleCollapsible(collapsibleNode, isCollapsed)
    }, [isCollapsed])

    return (
        <div
            ref={collapsibleRef}
            className={`${styles.collapsible} ${
                isCollapsed ? '' : styles.collapsed
            }`}
        >
            <div className={styles.collapsibleContents}>{children}</div>
        </div>
    )
}
