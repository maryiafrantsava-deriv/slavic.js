import { FC, useState, useContext, useEffect } from "react";
import ImageExample from "./ImageExample";
import styles from "../../styles/SizeSelect.module.scss";
import QRContext from "../../context/QRContext";

const SizeSelect: FC = () => {
    const [ demo_size, setDemoSize ] = useState(360);
    const { example_size, setExampleSize } = useContext(QRContext);
    const side_multiplier = 45;
    const demo_size_result = side_multiplier * example_size;

    useEffect(() => {
        setDemoSize(demo_size_result);
    }, [example_size, demo_size_result])

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const size = e.target.value;

        switch (size) {
            case "small":
                setDemoSize(demo_size_result)
                setExampleSize(2)
                break;
            case "medium":
                setDemoSize(demo_size_result)
                setExampleSize(3)
                break;
            case "large":
                setDemoSize(demo_size_result)
                setExampleSize(4)
                break;
            default:
                setDemoSize(180)
                setExampleSize(3)
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
                    <input type="radio" value="small" name="size" checked={example_size === 2} /> Small
                    <input type="radio" value="medium" name="size" checked={example_size === 3} /> Medium
                    <input type="radio" value="large" name="size" checked={example_size === 4} /> Large
                </div>
            </>
        );
    };
  
  export default SizeSelect;