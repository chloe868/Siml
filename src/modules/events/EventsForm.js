import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { BasicStyles, Color } from 'common'
import LocationInput from 'components/InputField/LocationInput'
import NumberInput from 'components/InputField/NumberInput'
import InputSelect from 'components/InputField/InputSelect'
import Range from 'components/InputField/Range'
import Slider from 'components/InputField/Slider'
import DateTimePicker from 'components/DateTime/index.js'
import Footer from 'modules/generic/Footer'
import Style from './Style'

class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: null,
      party: 1
    }
  }

  render() {
    return (
      <View style={{
        flex: 1,
        height: '100%'
      }}>
        <ScrollView style={{
          backgroundColor: Color.containerBackground,
          height: '100%'
        }}
        showsVerticalScrollIndicator={false}
        >
        <View>
          <Text style={{marginTop: 20}}>
            <LocationInput title={'Location'} onTyping={(input) => this.setState({ location: input })}/>
          </Text>
          <View style={{
            marginLeft: 20,
            marginRight: 20}}>
            <Text>Date Range</Text>
            <DateTimePicker 
              type={'datetime'}
              placeholder={'Select Date'}
              onFinish={(date) => {
                this.setState({
                  Date: date.date
                })
              }}
              style={{
                marginTop: 5
            }} />
          </View>
          <Text style={{width: 100}}>
            <NumberInput placeholder={'0'} title={'No. of Tickets'} onTyping={(clicks) => this.setState({ party: clicks })} />
          </Text>
          <Text>
            <Range placeholder={'$1-$100'} title={'Price Range'} />
          </Text>
          <Text style={{marginLeft: 20}}>
            <Slider title={'Radius'} />
          </Text>

        </View>

        <View style={{
                width: '33%',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop:'140%',
                marginLeft: '35%'
            }}>
                <TouchableOpacity
                style={{
                    height: 70,
                    width: 70,
                    borderRadius: 35,
                    backgroundColor: Color.primary,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Image source={require('assets/logo.png')} style={{
                        height: 50,
                        width: 50
                    }}/>
                </TouchableOpacity>
        </View>
        </ScrollView>
        {/* <Footer layer={1} {...this.props}/> */}
      </View>
    );
  }
}
export default Events;
