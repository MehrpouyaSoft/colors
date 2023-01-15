import { memo, useContext } from 'react'
import { useDrag } from 'react-dnd'
import appContext from '../../../../context'
import { ItemTypes } from '../../../../types'
import ColorCard from '../../../../common/color'
import classes from './style.module.scss'
import { toast } from 'react-toastify'

export const Box = ({ item }) => {
    const { add, colors } = useContext(appContext)
    const [{ isDragging }, drag] = useDrag(
        () => ({
            type: ItemTypes.BOX,
            item: { item },
            end: (item, monitor) => {
                const dropResult = monitor.getDropResult()
                if (item && dropResult) {
                    const check = colors.filter(el => el.id == item.item.id).length;
                    if (!check) {
                        add(item.item)
                    } else {
                        toast.error('این رنگ قبلا انتحاب شده')
                    }
                }
            },
            collect: (monitor) => ({
                isDragging: monitor.isDragging(),
            }),
        }),
        [item, colors],
    )

    return (
        <div ref={drag} className={classes.box}>
            <ColorCard color={item.hex} className={classes.card} />
        </div>
    )
}

export default memo(Box)