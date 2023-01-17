import {View,ActivityIndicator,StyleSheet} from 'react-native'
import { GlobalStyles } from '../../constants/styles'

function LoadingOverlay(){
return <View style={style.container}>
        <ActivityIndicator size="large" color="white"/>
</View>
}
const style = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        padding:24,
        backgroundColor:GlobalStyles.colors.primary700
    }
})

export default LoadingOverlay
