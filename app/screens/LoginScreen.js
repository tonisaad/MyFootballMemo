import React from 'react';
import reactDom from 'react-dom';
import { Button, Text,Image, View, StyleSheet, backgroundColor, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import{MaterialCommunityIcons, AntDesign} from '@expo/vector-icons'
import { Formik } from 'formika';
import AppScreen from '../component/AppScreen';
import AppText from '../component/AppText';
import AppColors from '../config/AppColors';
import AppLoginButton from '../component/AppLoginButton';
import AppTextInput from '../component/AppTextInput';
import * as Yup from 'yup';
import DataManager from '../config/DataManager';



const schema = Yup.object().shape(
{
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).max(10).label("Password"),

}

);


const users=[
    {
        id:"user1",
        name: "Cirstiano Ronaldo",
        profile: "Portuguese professional footballer. I play as a forward for Premier League club Manchester United and captain the Portugal national team",
        email:"cr7@gmail.com",
        password: "123456789",
        image:require('../assets/ronaldo.jpg')
        
    },
    {
        id:"user2",
        name: "David Becham",
        profile: "I am an English former professional footballer, the current president & co-owner of Inter Miami CF and co-owner of Salford City",
        email:"db@gmail.com",
        password: "987654321",
        image:require('../assets/david.webp')
    }

];

const validateUser=({email,password}) => {
    return(
        users.filter((user)=> user.email === email && user.password === password).length>0

    );
}

const getUser = ({email}) => {
    return users.find((user)=>user.email ===email);
}

const createUser= ({email}) =>{
    let commonData = DataManager.getInstance();
    let userID = getUser({email}).id;
    commonData.setUserID(userID);
    

}

function LoginScreen({navigation}) {
    return (
        
        <AppScreen style={styles.cont}>
            <View style={styles.container}>
            <Image style={styles.icon1} 
            source={require('../assets/Memo.png')}>
                </Image>
            </View>
           



            <Formik 
            initialValues={{email:'',password:'',}}
            onSubmit ={(values, {resetForm})=> {
                  if(validateUser(values)){
                console.log(values);
                resetForm(); 
                createUser(values);
                navigation.navigate("Account", {
                    screen:'Home',
                    params:{
                        screen:'Account1', 
                        params:{
                            paramEmail: values.email,
                            paramProfile: getUser(values).profile,
                            paramName: getUser(values).name,
                            paramImage: getUser(values).image
                        },
                    }
                });
            } 
            else{
                resetForm();
                alert("Invalid Login Details")
            }
        }}
            validationSchema={schema}
            >
            {({values,handleChange, handleSubmit, errors, setFieldTouched, touched})=>(
                <>
                <View style={styles.bottomContainer}>
                <View style={styles.textCont}>
                <Text style={styles.textlogin}>  Login</Text>
                <AppText>     Please sign in to continue.</AppText>
                </View>


                <View style={styles.buttonsCont}>
                   {touched.email && <AppText style={{color:'orange'}} >{errors.email}</AppText>}
                <AppTextInput
                autoCapitalize="none"
                autoCorrect={false} 
                icon="email" 
                placeholder="Email Address"
                keyboardType="email-address"
                textContentType="emailAddress"
                value={values.email}
                onBlur= {()=> setFieldTouched("email")}
                onChangeText ={handleChange("email")}
                height="35%"
                />
                { touched.password && <AppText style={{color:'orange'}}>{errors.password}</AppText>}
                <AppTextInput 
                autoCapitalize="none"
                autoCorrect={false} 
                icon="lock" 
                placeholder="Password"
                secureTextEntry={true}
                textContentType="password"
                value={values.password}
                onBlur= {()=> setFieldTouched("password")}
                onChangeText={handleChange("password")}
                height="35%"
                />
                 
            </View>
                
            <View style={styles.button}>
                <AppLoginButton title = {"Login"} onPress= {handleSubmit}/> 
            </View>
            <View style={styles.botbutton}>
               <AppText>Don't have an account?</AppText>
               <TouchableOpacity onPress={ ()=> navigation.navigate('Register')} >
               <View >     
                <Text style={styles.botbuttontext}> Sign up  </Text>
            </View>
        </TouchableOpacity>    
        </View> 
            
            </View>

                </>
            )}
             </Formik>





            
        </AppScreen>
    );
}
const styles = StyleSheet.create({
    cont:{
marginTop:0
    },
    container:{
        alignItems: 'center',
        flex:1,
        marginTop:10
    },
    icon1:{
        height:300,
        width: 300,
    },
    bottomContainer:{
        flex: 2,
        backgroundColor: AppColors.otherColor2,
        alignItems: 'center',
    },
    textlogin:{
        fontWeight:"bold",
        fontSize: Platform.OS === 'android' ? 40 : 50,
        fontFamily: Platform.OS === 'android' ? "serif" : "Cochin"

    },

    textCont:{
        marginTop:20,
        alignItems: 'flex-start',
        height: '15%',
        //backgroundColor: 'red',
        justifyContent: 'space-between',
        width: '90%'

    },
    buttonsCont:{
        marginTop:20,
        width:"75%",
        //backgroundColor:"red",
        height:"20%",
        justifyContent: 'space-between', 
    },
    button:{
        width:"30%",
     marginTop:55,
     marginLeft:170
    },

    botbutton:{
        flexDirection: 'row',
        marginTop: 130

    },
    botbuttontext:{
        color: AppColors.primaryColor,
        fontSize: Platform.OS === 'android' ? 16 : 20,
        fontFamily: Platform.OS === 'android' ? "serif" : "Cochin"
    }
})

export default LoginScreen;