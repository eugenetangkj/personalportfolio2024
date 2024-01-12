import styles from './styles.module.css';

//Bubble that appears in the hero's background
interface BubbleProps
 {
    bubbleIndex: number;
 }

function Bubble({ bubbleIndex }: BubbleProps) {
    return (
        <div className={ (bubbleIndex == 0) ? 'bubble-zero' : (bubbleIndex == 1) ? 'bubble-one' : (bubbleIndex == 2) ? 'bubble-two' : 'bubble-three' }></div>

    );
}

export default Bubble;