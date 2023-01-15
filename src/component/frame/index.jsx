import { useContext } from 'react'
import { useDrop } from 'react-dnd'
import { ReactSortable } from 'react-sortablejs'
import appContext from '../../context'
import { ItemTypes } from '../../types'
import ColorCard from '../../common/color'
import classes from './style.module.scss'

export const Frame = () => {
    const { colors, setColorsAdded, deleted } = useContext(appContext)
    const [{ canDrop, isOver }, drop] = useDrop(() => ({
        accept: ItemTypes.BOX,
        drop: () => ({ name: 'Dustbin' }),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    }))
    const isActive = canDrop && isOver


    return (
        <div ref={drop} className={classes.frame}>
            {colors && colors.length ? null : <div className={classes.over}><strong>{isActive ? 'رها کنید' : 'رنگ را اینجا بکشید'}</strong></div>}
            <ReactSortable animation={200} className={classes.cards} delayOnTouchStart={true} cl list={colors} setList={setColorsAdded} style={{ display: 'flex', justifyContent: 'center' }}>
                {colors && colors.length ? colors.map((el, key) => (
                    <div className={classes.box}>
                        <ColorCard key={key} color={el.hex} />
                        <span onClick={() => deleted(el.id)}>deleted</span>
                    </div>
                )) : ''}
            </ReactSortable>
        </div>
    )
}


export default Frame