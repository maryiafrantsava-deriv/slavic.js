import { FC, useState, useContext, useEffect } from "react";
import ImageExample from "./ImageExample";
import styles from "../../styles/SizeSelect.module.scss";
import QRContext from "../../context/QRContext";

const SizeSelect: FC = () => {
    const [ demo_size, setDemoSize ] = useState(360);
    const { example_size, setExampleSize } = useContext(QRContext);
    const side_multiplier = 70;
    const demo_size_result = side_multiplier * example_size;

    useEffect(() => {
        setDemoSize(demo_size_result);
    }, [example_size, demo_size_result])


    const updateSizeSettings = (demo_size: number, example_size: number) => {
        setDemoSize(demo_size);
        setExampleSize(example_size);
        localStorage.setItem('example_size', example_size.toString());
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const size = e.target.value;

        switch (size) {
            case "small":
                updateSizeSettings(demo_size_result, 2)
                break;
            case "medium":
                updateSizeSettings(demo_size_result, 3)
                break;
            case "large":
                updateSizeSettings(demo_size_result, 4)
                break;
            default:
                updateSizeSettings(180, 3)
                break;
        }
    }

    return (
            <div className={styles.containerSelectSize}>
                <div className={styles["qr-code-container"]}>
                    <div className={styles.containerQR}>
                        <ImageExample width={demo_size.toString()} height={demo_size.toString()} />
                    </div>
                </div>
                <div className={styles["size-select"]} onChange={onChange}>
                    <input type="radio" value="small" name="size" checked={example_size === 2} /> Small
                    <input type="radio" value="medium" name="size" checked={example_size === 3} /> Medium
                    <input type="radio" value="large" name="size" checked={example_size === 4} /> Large
                </div>
            </div>
        );
    };
  
  export default SizeSelect;