
import { Text, TextInput, View,StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";

function Input({label,style,textInputConfig}){
    const inputStyles = [styles.input]
    return <View style={[styles.inputContainer,style]}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                style={inputStyles}
                {...textInputConfig}
            />
    </View>
}

export default Input

const styles = StyleSheet.create({
    inputContainer:{
        marginHorizontal:4,
        marginVertical:8
    },
    label:{
        fontSize:12,
        color:GlobalStyles.colors.primary100,
        marginBottom:4
    },
    input:{
        backgroundColor:GlobalStyles.colors.primary100,
        color:GlobalStyles.colors.primary700,
        padding:6,
        borderRadius:6,
        fontSize:18
    }
})
