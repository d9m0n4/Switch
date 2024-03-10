import {FC, useState, useRef, useEffect} from 'react';
import cls from './Switch.module.scss';
import {ISwitchItems} from "../model";

interface SwitchProps {
    switchItems: ISwitchItems[];
    handleSwitchItem: (index: number) => void
    activeElementIndex: number
}

export const Switch: FC<SwitchProps> = ({ switchItems, handleSwitchItem, activeElementIndex }) => {
    const [highlightStyle, setHighlightStyle] = useState<{
        top: number;
        left: number;
        width: number;
        height: number
    }>({
        top: 0,
        left: 0,
        width: 0,
        height: 0
    });

        const itemsContainerRef = useRef<HTMLDivElement>(null)

        useEffect(() => {
            const switchItem = itemsContainerRef.current?.querySelector
            (`.${cls['switch-item']}:nth-child(${activeElementIndex + 1})`);
            if (switchItem && switchItem instanceof HTMLDivElement) {
                setHighlightStyle({
                    height: switchItem.clientHeight,
                    width: switchItem.clientWidth,
                    top: switchItem.offsetTop,
                    left: switchItem.offsetLeft
                })
            }
        }, [activeElementIndex])

    return (
        <div className={cls.switch} >
            <div className={cls['switch-items']} ref={itemsContainerRef}>
                {switchItems.map((item, index) => (
                    <div
                        key={item.label}
                        className={`${cls['switch-item']} ${index === activeElementIndex ? cls.active : ''}`}
                        onClick={() => handleSwitchItem(index)}
                    >
                        <p>{item.label}</p>
                    </div>
                ))}
                <div
                    className={cls.highlight}
                    style={{
                        top: highlightStyle.top,
                        left: highlightStyle.left,
                        width: highlightStyle.width,
                        height: highlightStyle.height
                }}
                />
            </div>
        </div>
    );
};
