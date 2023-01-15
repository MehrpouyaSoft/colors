import { initialColors } from '../../model'
import Box from './parts/box'
import classes from './style.module.scss'

export const Colors = () => {
    return (
        <div className={classes.box}>
            {initialColors.map((el, key) => (
                <Box key={key} item={el} />
            ))}
        </div>
    )
}


export default Colors