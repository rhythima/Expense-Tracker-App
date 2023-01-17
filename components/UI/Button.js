
import {Pressable,StyleSheet,Text,View} from 'react-native'
import { GlobalStyles } from '../../constants/styles'

function Button({children,mode,style,onPress}){
    return <View style={style}>
        <Pressable style={({pressed}) => pressed && styles.pressed} onPress={onPress}>
            <View style={[styles.button,mode === 'flat' && styles.flat]}>
                <Text style={[styles.buttonText,mode === 'flat' && styles.flatText]}>{children}</Text>
            </View>
        </Pressable>
    </View>
}


export default Button

const styles = StyleSheet.create({
    button:{
        borderRadius:4,
        padding:8,
        backgroundColor:GlobalStyles.colors.primary500
    },
    flat:{
        backfaceVisibility:"transparent"
    },
    buttonText:{
        color:"white",
        textAlign:"center"
    },
    flatText:{
        color:GlobalStyles.colors.primary200
    },
    pressed:{
        opacity:0.75,
        backgroundColor:GlobalStyles.colors.primary100,
        borderRadius:4
    }
})
