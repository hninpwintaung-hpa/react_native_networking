import React, {Component} from 'react'
import {View,Text,StyleSheet,TouchableOpacity,FlatList} from 'react-native'
import {Header,Card} from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome5'

import FetchPatient from './FetchPatient'
import ShowPatient from './ShowPatient'


export default class Patients extends Component{

    constructor(props){
         super(props)
         this.state=({
             patients:[],
             loading:false
         })
    }
    componentDidMount=()=>{
        this.getPatients();
    }

    getPatients=()=>{
       FetchPatient()
       .then((res)=>{
           this.setState({patients:res})
           //console.log(res)
       })
       .catch((err)=>{
           console.log(err)
       })
    }

       render(){
           return(
               <View>
                   <Header
                    centerComponent={{text:"Patients",style:{color:"#fff"}}}
                    rightComponent={
                   <TouchableOpacity onPress={()=>this.props.navigation.navigate("Newpatient")}>
                       <Text>
                           <Icon name="user-plus" size={14} color="#fff"></Icon>
                       </Text>
                   </TouchableOpacity>
               }
               ></Header>
               <View>
                   <FlatList  //same to spinner
                   refreshing={this.state.loading}
                   onRefresh={()=>this.getPatients()}
                   keyExtractor={(p)=>p.id.toString()}
                   data={this.state.patients}
                   renderItem={(p)=>{
                      // console.log(p)
                      return(
                        <ShowPatient 
                        p_name={p.item.patient_name}
                        p_tno={p.item.table_no}
                        p_age={p.item.age}
                        p_doctor={p.item.doctor.doctor_name}
                        p_disease={p.item.category.category_name}
                        ></ShowPatient>
                      )
                   }}
                   />
               </View>
               </View>
           )
       }
}

