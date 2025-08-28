import Select from "react-select"

interface IProps {
    playlist: Array<string>;
}

const Sidebar:React.FC<IProps> = ({ playlist }) => {

    const styles = {
        menuList: (styles:any) => {
            return {
                ...styles,
                maxHeight: "25vh"
            };
        },
        option: (styles:any, { isFocused }: { isFocused :any}) => {
            return {
                ... styles,
                backgroundColor: isFocused ? "#9999999" : null,
                color: "#333333",
            }
        }
    }

    const handleChange = ((e:any) => {
        console.log(e.id)
    })


    return(
        <>
            <Select 
            options={playlist} 
            getOptionLabel={(e:any) => e.name}
            styles={styles}
            onChange={handleChange}
            theme={(theme) => ({
                ...theme,
                borderRadius: 0,
                colors: {
                    ...theme.colors, 
                    primary: "black",
                    primary25: "grey",
                    primary50: "grey",
                    primary75: "black",
                    neutral0: "white",
                    neutral5: "white",
                    neutral10: "white",
                    neutral20: "black",
                    neutral30: "black",
                    neutral40: "white",
                    neutral50: "black",
                    neutral60: "black",
                    neutral70: "white",
                    neutral80: "black",
                    neutral90: "white",
                },
            })}
            />
        </>
    )
}

export default Sidebar