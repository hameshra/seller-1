import React, { useState } from "react";
import { Dimensions } from 'react-native';
import Checkbox from 'expo-checkbox';
import {
    StyleSheet,
    TextInput,
    View,
    Text,
    ScrollView,
    SafeAreaView,
    Image,
    Keyboard,
    TouchableOpacity,
    KeyboardAvoidingView,
    StatusBar
} from "react-native";

import { ProfileStyles } from "../css/profile";
import { RouteStackParamList } from "../../RouteStackParams";
import { StackNavigationProp } from "@react-navigation/stack";
const {width,height} = Dimensions.get('window')
import { useNavigation } from "@react-navigation/native";
// import Svg, { Path } from "react-native-svg";
type dashboardMain = StackNavigationProp<RouteStackParamList, "Login">;
export default function DashboardMain() {
    const navigation = useNavigation<dashboardMain>();
//     const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
 
    const initialstate = {
        
       
        password: "",
        
        email: "",

       

       

    };
    const errmsg = {
        
       
        // phonenumberErr: "",
        emailErr: "",
        passwordErr: "",


       
       
    };
   
    const [forgetForm, setForgetForm] = useState(initialstate);
    const [error, setError] = useState(errmsg);

    console.log("yes", forgetForm);
    const emailverify =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const pattern = /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;

   
   
  
   

    function EmailValidate(value: string) {
        if (forgetForm.email === "") {
            setError({ ...error, emailErr: "*This field can not be empty" });
        } else if (!!!emailverify.test(forgetForm.email)) {
            setError({ ...error, emailErr: "Invalid Email" });
        } else {
            setError({ ...error, emailErr: "" });
        }
    }const [isChecked, setChecked] = useState(false);
    const [isChecked2, setChecked2] = useState(false);

    return (
        <>
        <SafeAreaView style={styles.safeContainer}>
        <ScrollView style={[styles.scrollView]}>
      <View style={[ProfileStyles.content]}>
                        
            <View style={{marginTop:50,marginBottom:13}}>
            {/* <Svg width={57} height={57} viewBox="0 0 100 115" >
<Path d="M98.4386 83.2061L0.352034 87.1856L0 25.8163L45.1515 0L99.2348 25.102L98.4386 83.2061Z" fill="#A561FF"/>
<Path d="M0 25.8163L45.1515 0L45.2447 60.3403L0.463086 86.9943L0 25.8163Z" fill="#9A4DFF"/>
<Path opacity="0.36" d="M99.235 25.1021L58.459 54.2025V114.611L98.4388 83.2062L99.235 25.1021Z" fill="#8F39FF"/>
<Path d="M0.351562 87.1856L48.2538 58.5413L98.4381 83.206L58.4594 114.89L0.351562 87.1856Z" fill="#8F39FF"/>
<Path opacity="0.4" d="M99.2345 25.1021L58.1064 54.5919V115L98.4383 83.2062L99.2345 25.1021Z" fill="#994CFF"/>
<Path d="M66.7598 21.444C66.7653 21.3495 66.7742 21.256 66.7764 21.1614C66.7784 20.4727 66.8698 19.7872 67.0485 19.1222C67.1614 18.6719 67.3803 18.2553 67.687 17.9073C68.0957 17.4623 68.601 17.3377 69.1807 17.4345C69.7604 17.5312 70.2912 17.796 70.7876 18.102C71.3126 18.4232 71.8064 18.793 72.2624 19.2067C72.8621 19.7519 73.3129 20.416 73.7893 21.0624C73.9564 21.2839 74.0401 21.5573 74.0259 21.8345C74.0092 22.6444 74.0259 23.4555 74.0259 24.2665V24.3778C73.9082 24.2042 73.8038 24.044 73.6927 23.8927C73.1742 23.136 72.553 22.4553 71.8471 21.8701C71.5483 21.6276 71.2263 21.4106 70.9053 21.2026C70.6515 21.0287 70.3598 20.9181 70.0547 20.88C69.9143 20.8578 69.7704 20.8776 69.6412 20.937C69.512 20.9964 69.4032 21.0926 69.3284 21.2137C69.1689 21.4601 69.0728 21.7421 69.0485 22.0348C69.0051 22.3922 68.981 22.7517 68.9764 23.1117C68.9697 25.0401 68.9697 26.9718 68.9764 28.9069C68.9699 29.5952 69.0776 30.2798 69.2951 30.9328C69.5685 31.7203 70.037 32.4254 70.6566 32.9821C71.1108 33.4029 71.6142 33.7671 72.1558 34.0668C72.5553 34.3089 73.0009 34.465 73.464 34.5251C73.627 34.5305 73.7902 34.5253 73.9526 34.5096C73.9749 34.5082 73.9972 34.5056 74.0192 34.5018V37.5056C73.8527 37.5134 73.6861 37.5312 73.5184 37.5279C72.982 37.5156 72.51 37.3054 72.0603 37.035C71.4929 36.6912 70.9533 36.3032 70.4467 35.8746C69.8082 35.3437 69.2369 34.7365 68.7454 34.0668C67.9714 33.0017 67.4206 31.7907 67.1262 30.5067C66.9664 29.832 66.8642 29.145 66.8208 28.453C66.8009 28.1292 66.792 27.8044 66.7775 27.4806C66.7775 27.4483 66.7686 27.4161 66.7653 27.3838L66.7598 21.444Z" fill="#E094FF"/>
<Path d="M77.8417 30.243L77.7562 30.1896C77.031 29.6745 76.3003 29.1672 75.5829 28.6421C75.1564 28.3317 74.8055 27.9534 74.6467 27.4283C74.5172 26.9871 74.4909 26.5218 74.5701 26.0688C74.6378 25.6694 74.8899 25.3946 75.1909 25.1521C75.6417 24.7872 76.086 24.4145 76.539 24.0518C76.8022 23.8404 76.8611 23.5634 76.8433 23.2463C76.8303 23.0151 76.7649 22.7899 76.6521 22.5877C76.5394 22.3855 76.3822 22.2116 76.1926 22.0793C75.839 21.7974 75.436 21.5842 75.0043 21.4507C74.9388 21.4306 74.8699 21.4229 74.8055 21.4017C74.7822 21.3939 74.7489 21.3639 74.7489 21.3439C74.7489 20.8677 74.7489 20.3915 74.7489 19.8976C74.8488 19.9298 74.9399 19.9521 75.0243 19.9877C76.0715 20.4327 76.9211 21.1125 77.4563 22.1382C77.6469 22.5214 77.7666 22.936 77.8095 23.362C77.8524 23.729 77.8598 24.0994 77.8317 24.4679C77.8149 24.6873 77.7506 24.9004 77.6434 25.0925C77.5363 25.2846 77.3887 25.4511 77.2109 25.5804C76.8111 25.8941 76.4013 26.1956 75.996 26.5038C75.8583 26.6084 75.7206 26.7118 75.5862 26.8209C75.56 26.8417 75.5384 26.8677 75.5226 26.8973C75.5069 26.9269 75.4975 26.9594 75.4949 26.9928C75.4922 27.0262 75.4965 27.0598 75.5075 27.0915C75.5184 27.1231 75.5358 27.1522 75.5585 27.1769C75.6236 27.2461 75.6958 27.3084 75.7739 27.3627C76.4358 27.8336 77.0987 28.3027 77.7628 28.77C77.7916 28.7871 77.8151 28.8119 77.8308 28.8415C77.8465 28.8711 77.8537 28.9045 77.8517 28.938C77.8517 29.3374 77.8517 29.7368 77.8517 30.1362C77.8472 30.1674 77.8439 30.1985 77.8417 30.243Z" fill="#E094FF"/>
<Path opacity="0.57" d="M0 25.8163L58.1068 54.5919V115L0 87.2958V25.8163Z" fill="#8F39FF"/>
<Path d="M37.2283 86.0153C37.4671 85.152 35.9679 68.5119 35.9679 68.5119L16.405 68.6521L13.7842 54.6665L20.5994 39.7686L47.1086 30.5713L66.0985 40.0445L78.986 56.1762L78.162 71.8028L67.4478 75.8513L54.7756 73.7375L37.2283 86.0153Z" fill="#E094FF"/>
<Path d="M36.7552 86.6851L36.9607 85.9419C37.1173 85.2744 36.3099 75.4196 35.7147 68.7911L16.1696 68.9369L13.4943 54.6342L20.3962 39.5483L20.5073 39.5093L47.1253 30.2698L47.2297 30.3221L66.2739 39.8231L66.3117 39.8709L79.2659 56.0849V56.1962L78.4319 72.0052L67.48 76.1394L54.8456 74.0356L36.7552 86.6851ZM36.2222 68.2315L36.2444 68.4863C36.3843 70.0316 37.4949 82.4452 37.5259 85.468L54.709 73.4526L67.42 75.5664L77.8933 71.6125L78.7017 56.2729L65.9197 40.2725L47.0897 30.8772L20.8026 40L14.0729 54.7087L16.636 68.3806L36.2222 68.2315Z" fill="white"/>
<Path d="M35.0661 69.8558L40.9674 48.8123L27.0338 56.7335L17.2612 67.6441L16.8481 67.2725L26.6851 56.2941L26.7239 56.2718L41.1851 48.0513L45.6805 32.0309L46.2146 32.1811L41.8459 47.7565L64.8192 40.3482L56.6124 58.6293L35.0661 69.8558ZM41.6537 48.4218L35.9479 68.7689L56.1815 58.2198L63.7964 41.2549L41.7581 48.3628L41.6537 48.4218Z" fill="white"/>
<Path d="M65.3944 73.5082L56.5702 59.6238C56.0938 64.2742 55.4675 71.0495 55.6018 71.5991L55.0788 71.786C54.8356 71.1419 55.7984 61.662 56.0994 58.7694L56.1826 57.9762L65.863 73.2067L65.3944 73.5082Z" fill="white"/>
<Path d="M74.7694 69.7523L56.2948 58.4079L75.8844 55.8168L75.9565 56.3686L57.9217 58.7539L75.0604 69.2784L74.7694 69.7523Z" fill="white"/>
<Path d="M53.7473 57.7347L41.5072 48.3517L21.7399 40.436L21.9454 39.9198L41.7837 47.8633L41.8148 47.8866L54.0849 57.2931L53.7473 57.7347Z" fill="white"/>
<Path d="M34.9995 67.3726L28.1476 56.7402L28.1398 56.7235L20.9404 41.4329L21.4423 41.1959L28.6351 56.4698L35.4659 67.07L34.9995 67.3726Z" fill="white"/>
<Path d="M15.4068 54.4637L15.3323 55.0149L25.0715 56.3358L25.146 55.7846L15.4068 54.4637Z" fill="white"/>
<Path d="M38.5708 69.1607L38.4405 69.7014L50.3799 72.5885L50.5102 72.0477L38.5708 69.1607Z" fill="white"/>
<Path d="M41.727 52.8486C44.2392 52.8486 46.2757 50.8084 46.2757 48.2917C46.2757 45.7749 44.2392 43.7347 41.727 43.7347C39.2149 43.7347 37.1783 45.7749 37.1783 48.2917C37.1783 50.8084 39.2149 52.8486 41.727 52.8486Z" fill="white"/>
<Path d="M56.5769 63.9016C59.089 63.9016 61.1256 61.8614 61.1256 59.3446C61.1256 56.8279 59.089 54.7877 56.5769 54.7877C54.0647 54.7877 52.0282 56.8279 52.0282 59.3446C52.0282 61.8614 54.0647 63.9016 56.5769 63.9016Z" fill="white"/>
<Path d="M27.3036 60.6818C29.8158 60.6818 31.8523 58.6416 31.8523 56.1249C31.8523 53.6082 29.8158 51.568 27.3036 51.568C24.7915 51.568 22.7549 53.6082 22.7549 56.1249C22.7549 58.6416 24.7915 60.6818 27.3036 60.6818Z" fill="white"/>
<Path d="M47.1086 35.1326C49.6208 35.1326 51.6573 33.0924 51.6573 30.5757C51.6573 28.059 49.6208 26.0188 47.1086 26.0188C44.5964 26.0188 42.5599 28.059 42.5599 30.5757C42.5599 33.0924 44.5964 35.1326 47.1086 35.1326Z" fill="white"/>
<Path d="M64.1784 44.2788C66.6905 44.2788 68.7271 42.2386 68.7271 39.7218C68.7271 37.2051 66.6905 35.1649 64.1784 35.1649C61.6662 35.1649 59.6297 37.2051 59.6297 39.7218C59.6297 42.2386 61.6662 44.2788 64.1784 44.2788Z" fill="white"/>
<Path d="M78.7273 60.4149C81.2395 60.4149 83.276 58.3747 83.276 55.8579C83.276 53.3412 81.2395 51.301 78.7273 51.301C76.2151 51.301 74.1786 53.3412 74.1786 55.8579C74.1786 58.3747 76.2151 60.4149 78.7273 60.4149Z" fill="white"/>
<Path d="M78.182 75.7689C80.6942 75.7689 82.7307 73.7287 82.7307 71.212C82.7307 68.6952 80.6942 66.655 78.182 66.655C75.6698 66.655 73.6333 68.6952 73.6333 71.212C73.6333 73.7287 75.6698 75.7689 78.182 75.7689Z" fill="white"/>
<Path d="M66.8159 79.9242C69.328 79.9242 71.3645 77.8839 71.3645 75.3672C71.3645 72.8505 69.328 70.8103 66.8159 70.8103C64.3037 70.8103 62.2672 72.8505 62.2672 75.3672C62.2672 77.8839 64.3037 79.9242 66.8159 79.9242Z" fill="white"/>
<Path d="M20.4373 44.6848C22.9495 44.6848 24.986 42.6446 24.986 40.1278C24.986 37.6111 22.9495 35.5709 20.4373 35.5709C17.9251 35.5709 15.8886 37.6111 15.8886 40.1278C15.8886 42.6446 17.9251 44.6848 20.4373 44.6848Z" fill="white"/>
<Path d="M35.9679 73.0688C38.4801 73.0688 40.5166 71.0286 40.5166 68.5119C40.5166 65.9952 38.4801 63.955 35.9679 63.955C33.4557 63.955 31.4192 65.9952 31.4192 68.5119C31.4192 71.0286 33.4557 73.0688 35.9679 73.0688Z" fill="white"/>
<Path d="M53.3697 77.4788C55.8819 77.4788 57.9184 75.4386 57.9184 72.9219C57.9184 70.4052 55.8819 68.365 53.3697 68.365C50.8575 68.365 48.821 70.4052 48.821 72.9219C48.821 75.4386 50.8575 77.4788 53.3697 77.4788Z" fill="white"/>
<Path d="M38.6476 89.937C41.1597 89.937 43.1962 87.8968 43.1962 85.38C43.1962 82.8633 41.1597 80.8231 38.6476 80.8231C36.1354 80.8231 34.0989 82.8633 34.0989 85.38C34.0989 87.8968 36.1354 89.937 38.6476 89.937Z" fill="white"/>
<Path d="M16.9636 73.5883C19.4758 73.5883 21.5123 71.5481 21.5123 69.0314C21.5123 66.5147 19.4758 64.4745 16.9636 64.4745C14.4514 64.4745 12.4149 66.5147 12.4149 69.0314C12.4149 71.5481 14.4514 73.5883 16.9636 73.5883Z" fill="white"/>
<Path d="M13.7831 59.2279C16.2952 59.2279 18.3317 57.1877 18.3317 54.6709C18.3317 52.1542 16.2952 50.114 13.7831 50.114C11.2709 50.114 9.23438 52.1542 9.23438 54.6709C9.23438 57.1877 11.2709 59.2279 13.7831 59.2279Z" fill="white"/>
      </Svg> */}
                <Text style={[ProfileStyles.regisText,{marginTop:13}]}>Login</Text>
                </View>  
           
           
           
         <View >
            
            <View style={ProfileStyles.headContainer} >
            <Text style={[ProfileStyles.regisTextHead]}>
                Reset your password
            </Text>
            <Text style={{fontSize:13,alignSelf:"center",width:313,marginBottom:20}}>
            Enter the email you use to login to Xero and we'll send you a link to get you back into your account.

            </Text>
                <View >
                    <Text style={ProfileStyles.headText}>Email</Text>
                </View>
                <TextInput
                // onChangeText={(email) => setEmail(email)}
                    onChangeText={(value) => setForgetForm({ ...forgetForm, email: value })}
                    style={[ProfileStyles.inputBox]}
                    placeholder="Email"
                    onBlur={() => EmailValidate(forgetForm.email)}
                    value={forgetForm.email}
                />
                <Text>
                    <Text
                        style={{ color: "red", marginLeft: 6, marginBottom: 0, fontSize: 13 }}>
                        {error.emailErr}
                    </Text>
              </Text>
            </View>

         
         
            <View >
            <View style={{flex:1,flexDirection:"row"}}>

        <TouchableOpacity 
         onPress={() => navigation.navigate("Login")}
        >

        <Text style={ProfileStyles.forgot_button}>Back to login</Text>
        </TouchableOpacity>
      </View>
     
    </View>
       
            </View>   
        </View>
      </ScrollView>
        </SafeAreaView>
        </>
        
      
    );
}
const styles = StyleSheet.create({
    safeContainer: {
        flex: 1,
        // backgroundColor:"violet",
        // marginTop: 83,
        // marginVertical: 32,
        
      },
      scrollView: {
        backgroundColor: 'white',
  
        // height:330,
        // marginTop:500
        // marginHorizontal: 20,
      },
     
    // container: {
    //   flex: 1,
    // //   marginHorizontal: 16,
    // //   marginVertical: 32,
    //  },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom:10,
    },
    paragraph: {
      fontSize: 15,
    },
    checkbox: {
      margin: 8,
    },
  });
