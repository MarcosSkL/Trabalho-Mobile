import React, { useState, useEffect } from 'react';
import { Text, Image, ImageBackground, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import  Swiper from 'react-native-swiper';


import { 
  Container,
  Scroller,

  SwipeDot,
  SwipeDotActive,
  SwipeItem,
  SwipeImage,
  FakeSwaiper,

  PageBody,

  UserAvatar,
  UserInfo,
  UserInfoName,
  UserInfoArea,
  
  ServiceArea,
  ServicesTitle,
  ServiceItem,
  ServiceInfo,
  ServiceName,
  ServicePrice,
  ServiceChoseButton,
  ServiceChoseBtnText
  
} from './styles';



export default props => {



const navigation = useNavigation()
const route = useRoute()


    return (
        <Container>
            <Scroller style={{ }}>

                <Swiper 
                  style={{ height: 240 }}
                  dot={<SwipeDot />}
                  activeDot={<SwipeDotActive />}
                  paginationStyle={{top: 15, right: 15, bottom: null, left: null}}
                  autoplay={true}
                >
                  
                    <SwipeItem >
                      <SwipeImage source={require('../../assets/Barbearia_capa10.jpg')} resizeMode="cover" />
                    </SwipeItem>
                </Swiper>
                
              <PageBody source={require('../../assets/fundo.jpg')} imageStyle={{ borderTopLeftRadius: 50,}}>
            
                  <UserInfoArea>
                    <UserAvatar source={require('../../assets/Barbearia_avatar13.jpg')}>
                    </UserAvatar>
                      <UserInfo>
                        <UserInfoName>MARCIUS BARBEARIA</UserInfoName>
                      </UserInfo>
                  </UserInfoArea>
                  <ServiceArea>
                      <ServicesTitle>LISTA DE SERVIÇO</ServicesTitle>
                      <ServiceItem>
                          <ServiceInfo>
                              <ServiceName>CORTE SOCIAL</ServiceName>
                              <ServicePrice>R$10,00</ServicePrice>
                          </ServiceInfo>
                          <ServiceChoseButton onPress={() => props.navigation.navigate('BarberModal')}>
                              <ServiceChoseBtnText>AGENDAR</ServiceChoseBtnText>
                          </ServiceChoseButton>
                      </ServiceItem>
                  </ServiceArea>
                  <ServiceArea>
                      <ServiceItem>
                          <ServiceInfo>
                              <ServiceName>CORTE DEGRADÊ</ServiceName>
                              <ServicePrice>R$20,00</ServicePrice>
                          </ServiceInfo>
                          <ServiceChoseButton>
                              <ServiceChoseBtnText>AGENDAR</ServiceChoseBtnText>
                          </ServiceChoseButton>
                      </ServiceItem>
                  </ServiceArea>
                  <ServiceArea>
                      <ServiceItem>
                          <ServiceInfo>
                              <ServiceName>BARBA MAQUINA</ServiceName>
                              <ServicePrice>R$10,00</ServicePrice>
                          </ServiceInfo>
                          <ServiceChoseButton>
                              <ServiceChoseBtnText>AGENDAR</ServiceChoseBtnText>
                          </ServiceChoseButton>
                      </ServiceItem>
                  </ServiceArea>
                  <ServiceArea>
                      <ServiceItem>
                          <ServiceInfo>
                              <ServiceName>BARBA LÂMINA</ServiceName>
                              <ServicePrice>R$20,00</ServicePrice>
                          </ServiceInfo>
                          <ServiceChoseButton>
                              <ServiceChoseBtnText>AGENDAR</ServiceChoseBtnText>
                          </ServiceChoseButton>
                      </ServiceItem>
                  </ServiceArea>
                  <ServiceArea>
                      <ServiceItem>
                          <ServiceInfo>
                              <ServiceName>SOBRANCELHA</ServiceName>
                              <ServicePrice>R$15,00</ServicePrice>
                          </ServiceInfo>
                          <ServiceChoseButton>
                              <ServiceChoseBtnText>AGENDAR</ServiceChoseBtnText>
                          </ServiceChoseButton>
                      </ServiceItem>
                  </ServiceArea>
                  <ServiceArea>
                      <ServiceItem>
                          <ServiceInfo>
                              <ServiceName>PINTURA</ServiceName>
                              <ServicePrice>R$40,00</ServicePrice>
                          </ServiceInfo>
                          <ServiceChoseButton>
                              <ServiceChoseBtnText>AGENDAR</ServiceChoseBtnText>
                          </ServiceChoseButton>
                      </ServiceItem>
                  </ServiceArea>

             
              </PageBody>

              
            </Scroller>

           
        </Container>
    );
}