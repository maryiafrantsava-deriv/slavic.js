import { FC, useState, useContext, useEffect } from "react";
import ImageExample from "./ImageExample";
import styles from "../../styles/SizeSelect.module.scss";
import QRSizeContext from "../../context/Context";

const SizeSelect: FC = () => {
    const [ demo_size, setDemoSize ] = useState(360);
    const { example_size, setExampleSize } = useContext(QRSizeContext);
    const side_multiplier = 45;

    useEffect(() => {
        setDemoSize(example_size * side_multiplier);
    }, [example_size])

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const size = e.target.value;

        switch (size) {
            case "small":
                setDemoSize(180)
                setExampleSize(4)
                break;
            case "medium":
                setDemoSize(270)
                setExampleSize(6)
                break;
            case "large":
                setDemoSize(360)
                setExampleSize(8)
                break;
            default:
                setDemoSize(180)
                setExampleSize(4)
                break;
        }
    }

    return (
            <>
                <div className={styles["qr-code-container"]}>
                    <div>
                        <ImageExample width={demo_size.toString()} height={demo_size.toString()} />
                    </div>
                </div>
                <div onChange={onChange}>
                    <input type="radio" value="small" name="size" checked={example_size === 4} /> Small
                    <input type="radio" value="medium" name="size" checked={example_size === 6} /> Medium
                    <input type="radio" value="large" name="size" checked={example_size === 8} /> Large
                </div>
            </>
        );
    };
  
  export default SizeSelect;